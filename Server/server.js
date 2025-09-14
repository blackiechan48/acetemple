// server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ==========================
// CORS
// ==========================
const allowedOrigins = [
  'http://localhost:3000',          // local dev
  'https://acetemple.netlify.app',  // Netlify
  'https://acetemple.com',          // Custom domain
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow curl/Postman
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
  })
);

// Stripe webhook needs raw body
app.use('/webhook', bodyParser.raw({ type: 'application/json' }));
// Normal API routes use JSON
app.use(bodyParser.json());

// ==========================
// Consultation Form
// ==========================
app.post('/api/consultation', async (req, res) => {
  const { name, email, phone, goal, obstacles, isReady } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'info@acetemple.com',
      subject: 'New Consultation Request',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGoal: ${goal}\nObstacles: ${obstacles}\nReady to commit: ${isReady}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

// ==========================
// Mailchimp Subscribe + Tag
// ==========================
async function subscribeAndTag(email, firstName, tag) {
  try {
    // Step 1: Subscribe user
    const response = await fetch(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: { FNAME: firstName || '' },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      console.error('❌ Mailchimp subscribe error:', data);
      return;
    }

    // Step 2: Add tag
    if (tag) {
      const subscriberHash = crypto
        .createHash('md5')
        .update(email.toLowerCase())
        .digest('hex');

      await fetch(
        `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${subscriberHash}/tags`,
        {
          method: 'POST',
          headers: {
            Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ tags: [{ name: tag, status: 'active' }] }),
        }
      );
    }

    console.log(`✅ ${email} subscribed and tagged as ${tag || 'none'}`);
  } catch (error) {
    console.error('🔥 Mailchimp error:', error);
  }
}

// Direct subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  const { email, firstName, tag } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  await subscribeAndTag(email, firstName, tag);
  res.status(200).json({ message: '✅ Subscription successful!' });
});

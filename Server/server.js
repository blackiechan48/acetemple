// server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// ✅ CORS configuration
const allowedOrigins = [
  'http://localhost:3000',        // Local dev
  'https://acetemple.netlify.app', // Netlify fallback
  'https://acetemple.com'          // ✅ Custom domain
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow curl/Postman
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  }
}));

app.use(bodyParser.json());

/* ------------------- Consultation Form ------------------- */
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

/* ------------------- Mailchimp Subscribe ------------------- */
app.post('/api/subscribe', async (req, res) => {
  const { email, firstName } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
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
          merge_fields: {
            FNAME: firstName || ''
          }
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Mailchimp error:', data);
      return res
        .status(response.status)
        .json({ message: 'Failed to subscribe user', error: data });
    }

    res.status(200).json({ message: '✅ Subscription successful!', data });
  } catch (error) {
    console.error('🔥 Server error:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

/* ------------------- Start Server ------------------- */
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

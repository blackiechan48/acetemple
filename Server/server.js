// server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // for Mailchimp API calls
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from Server/.env
dotenv.config({ path: `${__dirname}/.env` });

// Debug logs to confirm env vars are loaded
console.log("📂 ENV TEST:");
console.log("MAILCHIMP_API_KEY:", process.env.MAILCHIMP_API_KEY);
console.log("MAILCHIMP_SERVER_PREFIX:", process.env.MAILCHIMP_SERVER_PREFIX);
console.log("MAILCHIMP_LIST_ID:", process.env.MAILCHIMP_LIST_ID);

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

/* ------------------- CONSULTATION FORM (EXISTING) ------------------- */
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
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Goal: ${goal}
Obstacles: ${obstacles}
Ready to commit: ${isReady}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

/* ------------------- NEW: MAILCHIMP SUBSCRIBE ------------------- */
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const url = `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`;

    console.log('📡 Mailchimp request to:', url);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Mailchimp error:', data);
      return res.status(response.status).json({
        message: 'Failed to subscribe user',
        error: data,
      });
    }

    console.log('✅ Mailchimp success:', data);
    res.status(200).json({ message: 'Subscription successful!', data });
  } catch (error) {
    console.error('🔥 Server error subscribing user:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

/* ------------------- START SERVER ------------------- */
const PORT = process.env.PORT || 5002;
app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server running on port ${PORT}`)
);

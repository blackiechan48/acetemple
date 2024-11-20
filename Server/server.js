// server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Handle consultation form submission
app.post('/api/consultation', async (req, res) => {
  const { name, email, phone, goal, obstacles, isReady } = req.body;

  try {
    // Configure the email transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL, // Set your Gmail address in .env
        pass: process.env.PASSWORD, // Set your Gmail password in .env
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: 'info@acetemple.com', // Set your preferred recipient email
      subject: 'New Consultation Request',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGoal: ${goal}\nObstacles: ${obstacles}\nReady to commit: ${isReady}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

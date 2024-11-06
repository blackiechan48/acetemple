// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); //for email notifications

const app = express();
app.use(bodyParser.json());

// Handle consultation form submission
app.post('/api/consultation', async (req, res) => {
  const { name, email, phone, goal, obstacles, isReady } = req.body;

  // Optionally: save to database, or send email notification
  // Example using nodemailer to send an email notification
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL, // Use environment variables for sensitive data
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
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

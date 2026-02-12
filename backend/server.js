require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email kontrolü
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('❌ ERROR: EMAIL_USER or EMAIL_PASS not found in .env file!');
  console.error('Please check your .env file in the backend folder');
  process.exit(1);
}

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Social Media Expert API is running!' });
});

app.get('/api/services', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Strategy Development',
      description: 'Creating comprehensive social media strategies tailored to your brand\'s goals.',
      icon: '📈'
    },
    {
      id: 2,
      title: 'Content Creation',
      description: 'Engaging posts, stories, and campaigns that resonate with your audience.',
      icon: '✍️'
    },
    {
      id: 3,
      title: 'Analytics & Growth',
      description: 'Data-driven insights and optimization to maximize your social media ROI.',
      icon: '📊'
    }
  ]);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Contact Form: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ error: 'Failed to send email: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log('');
  console.log('🚀 Server is running on port', PORT);
  console.log('📧 Email configured for:', process.env.EMAIL_USER);
  console.log('');
});
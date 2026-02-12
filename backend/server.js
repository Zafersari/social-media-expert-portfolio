require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const { sendContactNotification } = require('./services/emailService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

  try {
    // Save to database first
    const [result] = await db.query(
      'INSERT INTO contact_messages (name, email, subject, message, status) VALUES (?, ?, ?, ?, ?)',
      [name, email, subject, message, 'new']
    );

    console.log('✅ Message saved to database with ID:', result.insertId);

    // Then send email notification
    try {
      await sendContactNotification({
        name,
        email,
        subject,
        message,
        messageId: result.insertId
      });
    } catch (emailError) {
      console.error('⚠️ Email failed but message was saved to database:', emailError.message);
      // Don't throw error - message is already saved
    }

    res.status(200).json({
      message: 'Message received successfully!',
      id: result.insertId
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error.message);
    res.status(500).json({ error: 'Failed to process your message: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log('');
  console.log('🚀 Server is running on port', PORT);
  console.log('📧 Email configured for:', process.env.EMAIL_USER);
  console.log('');
});
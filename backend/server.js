const express = require('express');
const cors = require('cors');

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
require('dotenv').config();
const app = require('./app');

// Email worker'ı başlat (kuyruktan job'ları işlesin)
require('./workers/emailWorker');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('');
  console.log('🚀 Server is running on port', PORT);
  console.log('📧 Email configured for:', process.env.EMAIL_USER);
  console.log('📮 Redis URL:', process.env.REDIS_URL || 'redis://localhost:6379');
  console.log('');
});
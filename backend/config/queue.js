require('dotenv').config();
const Bull = require('bull');

// Redis URL'den Bull queue oluştur
const emailQueue = new Bull('email-queue', process.env.REDIS_URL || 'redis://localhost:6379', {
    defaultJobOptions: {
        removeOnComplete: true,   // Başarılı job'ları temizle
        removeOnFail: false,      // Başarısız job'ları loglamak için tut
        attempts: 3,              // Hata durumunda 3 kez dene
        backoff: {
            type: 'exponential',    // Üstel geri çekilme
            delay: 2000             // İlk deneme 2sn, sonra 4sn, 8sn...
        }
    }
});

// Queue bağlantı olayları
emailQueue.on('error', (error) => {
    console.error('❌ Email queue bağlantı hatası:', error.message);
});

emailQueue.on('ready', () => {
    console.log('✅ Email queue Redis\'e bağlandı');
});

module.exports = emailQueue;

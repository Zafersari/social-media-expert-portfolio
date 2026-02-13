const emailQueue = require('../config/queue');
const transporter = require('../config/email');
const { renderTemplate } = require('../services/templateService');

/**
 * Email Worker — Kuyruktan job alıp işler
 * Her job tipi için farklı template kullanır
 */
emailQueue.process(async (job) => {
    const { type, data } = job.data;

    console.log(`📧 Email işleniyor: [${type}] Job #${job.id}`);

    let html;
    let mailOptions;

    switch (type) {
        case 'contact-notification':
            html = renderTemplate('contact-notification', {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message,
                messageId: data.messageId,
            });
            mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                replyTo: data.email,
                subject: `İletişim Formu: ${data.subject}`,
                html,
            };
            break;

        case 'welcome':
            html = renderTemplate('welcome', {
                name: data.name,
            });
            mailOptions = {
                from: process.env.EMAIL_USER,
                to: data.email,
                subject: 'Hoş Geldiniz!',
                html,
            };
            break;

        default:
            throw new Error(`Bilinmeyen email tipi: ${type}`);
    }

    // Nodemailer ile gönder
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email gönderildi: [${type}] MessageID: ${info.messageId}`);

    return { messageId: info.messageId };
});

// Worker event'leri
emailQueue.on('completed', (job, result) => {
    console.log(`✅ Job #${job.id} başarıyla tamamlandı`);
});

emailQueue.on('failed', (job, err) => {
    console.error(`❌ Job #${job.id} başarısız:`, err.message);
});

emailQueue.on('stalled', (job) => {
    console.warn(`⚠️ Job #${job.id} takıldı, yeniden denenecek`);
});

console.log('👷 Email worker başlatıldı, kuyruk dinleniyor...');

module.exports = emailQueue;

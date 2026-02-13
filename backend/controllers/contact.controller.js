const db = require('../config/database');
const { sendContactNotification } = require('../services/emailService');

/**
 * İletişim formu mesajını işle
 * 1. Veritabanına kaydet
 * 2. Email bildirimini kuyruğa ekle
 */
async function createContact(req, res, next) {
    // Zod middleware zaten validate ve sanitize etti
    const { name, email, subject, message } = req.body;

    try {
        // Veritabanına kaydet
        const result = await db.query(
            'INSERT INTO contact_messages (name, email, subject, message, status) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [name, email, subject, message, 'new']
        );

        const insertedId = result.rows[0].id;
        console.log('✅ Mesaj veritabanına kaydedildi, ID:', insertedId);

        // Email kuyruğuna ekle (hata olsa bile mesaj kaydedildi)
        try {
            await sendContactNotification({
                name,
                email,
                subject,
                message,
                messageId: insertedId,
            });
        } catch (emailError) {
            console.error('⚠️ Email kuyruğa eklenemedi ama mesaj kaydedildi:', emailError.message);
        }

        res.status(200).json({
            success: true,
            message: 'Mesajınız başarıyla alındı!',
            id: insertedId,
        });
    } catch (error) {
        next(error);
    }
}

/**
 * Hizmet listesini döndür
 */
function getServices(req, res) {
    res.json([
        {
            id: 1,
            title: 'Strategy Development',
            description: "Creating comprehensive social media strategies tailored to your brand's goals.",
            icon: '📈',
        },
        {
            id: 2,
            title: 'Content Creation',
            description: 'Engaging posts, stories, and campaigns that resonate with your audience.',
            icon: '✍️',
        },
        {
            id: 3,
            title: 'Analytics & Growth',
            description: 'Data-driven insights and optimization to maximize your social media ROI.',
            icon: '📊',
        },
    ]);
}

module.exports = {
    createContact,
    getServices,
};

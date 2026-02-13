const emailQueue = require('../config/queue');

/**
 * Email servis katmanı
 * Direkt email göndermek yerine Bull queue'ya job ekler
 * Worker (emailWorker.js) kuyruktan alıp işler
 */

/**
 * İletişim formu bildirim emaili kuyruğa ekle
 * @param {Object} contactData - İletişim formu verileri
 */
async function sendContactNotification(contactData) {
  const job = await emailQueue.add({
    type: 'contact-notification',
    data: {
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      messageId: contactData.messageId,
    },
  });

  console.log(`📨 Contact notification kuyruğa eklendi — Job #${job.id}`);
  return { success: true, jobId: job.id };
}

/**
 * Hoş geldin emaili kuyruğa ekle
 * @param {string} recipientEmail - Alıcı email
 * @param {string} recipientName - Alıcı adı
 */
async function sendWelcomeEmail(recipientEmail, recipientName) {
  const job = await emailQueue.add({
    type: 'welcome',
    data: {
      email: recipientEmail,
      name: recipientName,
    },
  });

  console.log(`📨 Welcome email kuyruğa eklendi — Job #${job.id}`);
  return { success: true, jobId: job.id };
}

module.exports = {
  sendContactNotification,
  sendWelcomeEmail,
};

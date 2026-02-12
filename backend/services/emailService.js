const transporter = require('../config/email');

/**
 * Send contact form notification email
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.name - Sender's name
 * @param {string} contactData.email - Sender's email
 * @param {string} contactData.subject - Email subject
 * @param {string} contactData.message - Email message
 * @param {number} contactData.messageId - Database message ID
 * @returns {Promise<Object>} Email send result
 */
async function sendContactNotification(contactData) {
  const { name, email, subject, message, messageId } = contactData;

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
      <hr>
      <p><small>Message ID: ${messageId}</small></p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email notification sent successfully');
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('⚠️ Email failed:', error.message);
    throw error;
  }
}

/**
 * Send welcome email (example for future use)
 * @param {string} recipientEmail - Recipient's email
 * @param {string} recipientName - Recipient's name
 */
async function sendWelcomeEmail(recipientEmail, recipientName) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'Welcome!',
    html: `
      <h3>Welcome ${recipientName}!</h3>
      <p>Thank you for getting in touch. I'll get back to you soon!</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Welcome email sent to:', recipientEmail);
    return { success: true };
  } catch (error) {
    console.error('⚠️ Welcome email failed:', error.message);
    throw error;
  }
}

module.exports = {
  sendContactNotification,
  sendWelcomeEmail
};

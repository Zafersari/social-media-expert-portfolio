const { z } = require('zod');

/**
 * Contact form Zod doğrulama şeması
 * Route'a girmeden önce gelen veriyi kontrol eder
 */
const contactSchema = z.object({
    name: z
        .string({ required_error: 'İsim alanı zorunludur' })
        .min(2, 'İsim en az 2 karakter olmalıdır')
        .max(100, 'İsim en fazla 100 karakter olabilir')
        .trim(),

    email: z
        .string({ required_error: 'Email alanı zorunludur' })
        .email('Geçerli bir email adresi giriniz')
        .trim()
        .toLowerCase(),

    subject: z
        .string({ required_error: 'Konu alanı zorunludur' })
        .min(3, 'Konu en az 3 karakter olmalıdır')
        .max(200, 'Konu en fazla 200 karakter olabilir')
        .trim(),

    message: z
        .string({ required_error: 'Mesaj alanı zorunludur' })
        .min(10, 'Mesaj en az 10 karakter olmalıdır')
        .max(5000, 'Mesaj en fazla 5000 karakter olabilir')
        .trim(),
});

module.exports = { contactSchema };

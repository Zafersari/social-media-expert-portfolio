/**
 * Generic Zod validation middleware fabrikası
 * Herhangi bir Zod şeması alıp req.body'yi validate eder
 *
 * Kullanım:
 *   const { contactSchema } = require('../schemas/contact.schema');
 *   router.post('/contact', validate(contactSchema), controller.createContact);
 */
const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            // Zod hata mesajlarını field bazlı döndür
            const fieldErrors = result.error.flatten().fieldErrors;
            return res.status(400).json({
                success: false,
                message: 'Doğrulama hatası',
                errors: fieldErrors,
            });
        }

        // Validate edilmiş ve sanitize edilmiş veriyi req.body'ye ata
        req.body = result.data;
        next();
    };
};

module.exports = validate;

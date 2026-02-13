const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const { contactSchema } = require('../schemas/contact.schema');
const contactController = require('../controllers/contact.controller');

// GET /api/services — Hizmet listesi
router.get('/services', contactController.getServices);

// POST /api/contact — İletişim formu (Zod validation middleware ile)
router.post('/contact', validate(contactSchema), contactController.createContact);

module.exports = router;

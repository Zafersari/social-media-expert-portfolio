const express = require('express');
const router = express.Router();
const contactRoutes = require('./contact.routes');

// Tüm route dosyalarını /api prefix altında birleştir
router.use('/', contactRoutes);

module.exports = router;

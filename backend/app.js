const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// --- Global Middleware ---
app.use(cors());
app.use(express.json());

// --- Ana Sayfa ---
app.get('/', (req, res) => {
    res.json({ message: 'Social Media Expert API is running!' });
});

// --- API Routes ---
app.use('/api', routes);

// --- Global Hata Yakalama (en sonda olmalı) ---
app.use(errorHandler);

module.exports = app;

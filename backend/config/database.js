require('dotenv').config();
const { Pool } = require('pg');

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || process.env.DB_PASSWORD || 'sifre123',
  database: process.env.DB_NAME || 'social_portfolio',
  port: parseInt(process.env.DB_PORT) || 5432,
  max: 10,
});

// Test the connection
pool.connect()
  .then(client => {
    console.log('✅ PostgreSQL veritabanına başarıyla bağlandı!');
    client.release();
  })
  .catch(err => {
    console.error('❌ Veritabanı bağlantı hatası:', err.message);
  });

module.exports = pool;
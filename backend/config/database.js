require('dotenv').config();
const mysql = require('mysql2/promise');

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'social_media_portfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
pool.getConnection()
  .then(connection => {
    console.log('✅ MySQL veritabanına başarıyla bağlandı!');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Veritabanı bağlantı hatası:', err.message);
  });

module.exports = pool;
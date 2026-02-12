require('dotenv').config();
const connection = require('./config/database');

// Basit bir test sorgusu
connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('❌ Sorgu hatası:', err.message);
    connection.end();
    return;
  }
  
  console.log('✅ Test sorgusu başarılı!');
  console.log('📊 Sonuç:', results[0].solution); // 2 olmalı
  
  connection.end((err) => {
    if (err) {
      console.error('❌ Bağlantı kapatma hatası:', err.message);
      return;
    }
    console.log('🔌 Veritabanı bağlantısı kapatıldı');
  });
});
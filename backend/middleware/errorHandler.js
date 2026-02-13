/**
 * Global hata yakalama middleware'i
 * Tüm yakalanmamış hataları JSON response olarak döner
 * Express'te 4 parametreli middleware = error handler
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    console.error('❌ Hata:', err.message);

    // Stack trace'i sadece development'ta göster
    if (process.env.NODE_ENV !== 'production') {
        console.error(err.stack);
    }

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Sunucu hatası oluştu';

    res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
    });
};

module.exports = errorHandler;

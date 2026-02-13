const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Template cache — her seferinde diskten okumamak için
const templateCache = {};

/**
 * Handlebars şablonunu okur, derler ve render eder
 * @param {string} templateName - Şablon dosya adı (.hbs uzantısız)
 * @param {Object} data - Şablona geçilecek veriler
 * @returns {string} Render edilmiş HTML string
 */
function renderTemplate(templateName, data) {
    // Cache'te varsa direkt kullan
    if (!templateCache[templateName]) {
        const templatePath = path.join(__dirname, '..', 'templates', `${templateName}.hbs`);

        // Dosya var mı kontrol et
        if (!fs.existsSync(templatePath)) {
            throw new Error(`Email şablonu bulunamadı: ${templateName}.hbs`);
        }

        const templateSource = fs.readFileSync(templatePath, 'utf-8');
        templateCache[templateName] = Handlebars.compile(templateSource);
    }

    // Ortak değişkenler ekle
    const templateData = {
        ...data,
        year: new Date().getFullYear(),
    };

    return templateCache[templateName](templateData);
}

module.exports = { renderTemplate };

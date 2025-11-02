import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Hata: ' + (data.error || 'Mesaj gönderilemedi'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      {/* Navigation */}
      <nav className="contact-nav">
        <div className="contact-nav-brand">
          <img
            src="/logo.png"
            alt="Website Logo"
            className="contact-nav-logo"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="contact-nav-links">
          <a className="contact-nav-link" onClick={() => navigate('/')}>ANA SAYFA</a>
          <a className="contact-nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
          <a className="contact-nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
          <a className="contact-nav-link" onClick={() => navigate('/blog')}>BLOG</a>
        </div>
      </nav>

      {/* Decorative circles */}
      <div className="contact-decorative-circle contact-left-circle"></div>
      <div className="contact-decorative-circle contact-right-circle"></div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-hero-subtitle">İletişim</span>
          <h1 className="contact-hero-title">
            Birlikte Çalışalım
          </h1>
          <p className="contact-hero-description">
            Projeniz hakkında konuşmak veya sorularınızı yanıtlamak için buradayım.
            Mesajınızı bırakın, size en kısa sürede dönüş yapalım.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          {/* Contact Info Side */}
          <div className="contact-info-side">
            <span className="contact-info-label">Benimle İletişime Geçin</span>
            <h2 className="contact-info-title">
              Hemen Başlayalım
            </h2>
            <p className="contact-info-text">
              Projeniz için sosyal medya stratejisi, içerik üretimi veya marka danışmanlığı
              konularında yardıma mı ihtiyacınız var? Size yardımcı olmaktan mutluluk duyarım.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-info-icon">📧</div>
                <div className="contact-info-details">
                  <div className="contact-info-item-label">Email</div>
                  <div className="contact-info-item-value">
                    <a href="mailto:testoglutest05@gmail.com">testoglutest05@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-details">
                  <div className="contact-info-item-label">Konum</div>
                  <div className="contact-info-item-value">Denizli, Türkiye</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">⏰</div>
                <div className="contact-info-details">
                  <div className="contact-info-item-label">Çalışma Saatleri</div>
                  <div className="contact-info-item-value">Pzt - Cum, 09:00 - 18:00</div>
                </div>
              </div>
            </div>

            <div className="contact-social-links">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <span>📱</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <span>📷</span>
              </a>
              <a href="mailto:testoglutest05@gmail.com" className="contact-social-link">
                <span>✉️</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-side">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label className="contact-form-label">Adınız *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Adınızı girin"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email adresinizi girin"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">Konu *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Mesajınızın konusu"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">Mesajınız *</label>
                <textarea
                  name="message"
                  placeholder="Mesajınızı yazın..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact-textarea"
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-footer-main-content">
          {/* Left Side - About */}
          <div className="contact-footer-about">
            <h4 className="contact-footer-brand">Tuba Sarıoğlu Busun</h4>
            <p className="contact-footer-role">Social Media Expert & Marka Danışmanı</p>
            <p className="contact-footer-description">
              Markaların dijital dünyada güçlenmesine yardımcı oluyor,
              stratejik içerikler ve yaratıcı kampanyalarla fark yaratıyorum.
            </p>
            <div className="contact-footer-location">
              <span className="location-icon">📍</span>
              <span>Denizli, Türkiye</span>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="contact-footer-links">
            <h4 className="contact-footer-heading">Hızlı Linkler</h4>
            <ul className="contact-footer-link-list">
              <li><a onClick={() => navigate('/')}>Ana Sayfa</a></li>
              <li><a onClick={() => navigate('/aboutme')}>Hakkımda</a></li>
              <li><a onClick={() => navigate('/services')}>Hizmetlerimiz</a></li>
              <li><a onClick={() => navigate('/blog')}>Blog</a></li>
              <li><a onClick={() => navigate('/contact')}>İletişim</a></li>
            </ul>
          </div>

          {/* Right Side - Contact */}
          <div className="contact-footer-contact">
            <h4 className="contact-footer-heading">İletişim</h4>
            <div className="contact-footer-contact-info">
              <p className="contact-footer-contact-item">
                <span className="contact-contact-icon">📧</span>
                <a href="mailto:testoglutest05@gmail.com">testoglutest05@gmail.com</a>
              </p>
              <p className="contact-footer-contact-item">
                <span className="contact-contact-icon">📷</span>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="contact-footer-bottom">
          <hr className="contact-footer-divider" />
          <div className="contact-footer-bottom-content">
            <p className="contact-footer-copyright">
              &copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. Tüm hakları saklıdır.
            </p>
            <div className="contact-footer-bottom-links">
              <a href="#" className="contact-footer-bottom-link">Gizlilik Politikası</a>
              <span className="contact-footer-separator">|</span>
              <a href="#" className="contact-footer-bottom-link">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;

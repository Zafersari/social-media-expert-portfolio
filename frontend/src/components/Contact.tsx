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
        <div className="contact-nav-logo" onClick={() => navigate('/')}><img src="logo.png" alt="Website Logo" /></div>
        <div className="contact-nav-menu">
          <a className="contact-nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
          <a className="contact-nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
          <a className="contact-nav-link" onClick={() => navigate('/blog')}>BLOG</a>
          <a className="contact-nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2 className="contact-heading">İletişime Geçin</h2>
        <p className="contact-subheading">Mesajınızı bırakın, size en kısa sürede dönüş yapalım</p>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Adresiniz"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Konu"
                value={formData.subject}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Mesajınız"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="contact-textarea"
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Gönder
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-footer-content">
          <div className="contact-footer-left">
            <h5 className="contact-footer-name">Tuba Sarıoğlu Busun</h5>
            <p className="contact-footer-role">Social Media Expert</p>
            <div className="contact-footer-location">
              <span>📍</span>
              <span>Denizli, Turkey</span>
            </div>
          </div>
          <div className="contact-footer-right">
            <h5 className="contact-footer-heading">Benimle İletişime Geçin</h5>
            <div className="contact-footer-social">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="contact-footer-social-link">
                <span>📱</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="contact-footer-social-link">
                <span>📷</span>
              </a>
              <a href="mailto:zafer_sari_20@hotmail.com" className="contact-footer-social-link">
                <span>✉️</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="contact-footer-divider" />
        <div className="contact-footer-copyright">
          <p>&copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;

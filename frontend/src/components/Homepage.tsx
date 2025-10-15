import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="luxury-homepage">
      {/* Navigation */}
      <nav className="luxury-nav">
        <div className="nav-brand">
          <img src="/logo.png" alt="TSB Logo" className="nav-logo" />
        </div>
        <div className="nav-links">
            <a className="nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
            <a className="nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
            <a className="nav-link" onClick={() => navigate('/blog')}>BLOG</a>
            <a className="nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Decorative circles */}
      <div className="decorative-circle left-circle"></div>
      <div className="decorative-circle right-circle"></div>
      <div className="decorative-circle bottom-circle"></div>

      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-content-left">
          <div className="hero-label">Tuba Busun Sarıoğlu</div>
          <h1 className="hero-title">
            Sosyal Medya Stratejisti & Marka Danışmanı
          </h1>
          
          {/* Location 
          <div className="hero-location">
            <span className="location-icon">📍</span>
            <span>Denizli, Türkiye</span>
          </div>
          */}
          {/* Social Icons 
          <div className="hero-social-main">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-circle">
              <span>📱</span>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-circle">
              <span>📷</span>
            </a>
            <a href="mailto:info@example.com" className="social-circle">
              <span>✉️</span>
            </a>
          </div>
          */}

          {/* Description */}
          <p className="hero-description">
            Markaların dijital dünyada güçlenmesine, hedef kitleleriyle anlamlı 
            bağlar kurmasına yardımcı oluyorum. Stratejik içerikler ve yaratıcı 
            kampanyalarla markanızı bir adım öne taşıyorum.
          </p>

          {/* Mini Stats */}
          <div className="hero-mini-stats">
            <div className="mini-stat">
              <div className="mini-stat-number">50+</div>
              <div className="mini-stat-label">Proje</div>
            </div>
            <div className="mini-stat">
              <div className="mini-stat-number">5+</div>
              <div className="mini-stat-label">Yıl Deneyim</div>
            </div>
            <div className="mini-stat">
              <div className="mini-stat-number">95%</div>
              <div className="mini-stat-label">Başarı Oranı</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={() => navigate('/contact')}>
              <span className="btn-icon">💬</span> İletişime Geçin
            </button>
            <button className="hero-btn-secondary" onClick={() => navigate('/portfolio')}>
              Portfolyo
            </button>
          </div>
        </div>

        <div className="hero-content-right">
          <div className="hero-portrait">
            <img src="/tuba_abla_3.jpg" alt="Portrait" className="portrait-img" />
          </div>
          {/*<div className="vertical-text">Social Media Expert</div>*/}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <span className="stats-section-span"> Verdiğim Hizmetler </span>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">📱</div>
            <h3 className="stat-title">SOSYAL MEDYA YÖNETİMİ</h3>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✍️</div>
            <h3 className="stat-title">İÇERİK ÜRETİMİ</h3>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <h3 className="stat-title">ANALİZ & RAPORLAMA</h3>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <h3 className="stat-title">REKLAM KAMPANYALARI</h3>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <h2 className="quote-text">"Veriyi duyguyla buluşturuyorum"</h2>
          <p className="quote-subtitle">
            Sadece rakamlarla değil, hikayelerle bağlantı kurarak markaların dijital dünyada yankı uyandırmasını sağlıyorum.
          </p>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="clients-header">
          {/*<span className="clients-subtitle">Bana Güvenen Markalar</span>*/}
          <h2 className="clients-main-title">Birlikte Çalıştığım Markalar</h2>
        </div>
        
        <div className="clients-showcase">
          <div className="client-item">
            <div className="client-logo-box">
              <img src="/client1.png" alt="Client 1" className="client-logo-img" />
            </div>
            <p className="client-name">SCK Akademi</p>
          </div>
          
          <div className="client-item">
            <div className="client-logo-box">
              <img src="/client2.png" alt="Client 2" className="client-logo-img" />
            </div>
            <p className="client-name">Arabica Coffee-House</p>
          </div>
          
          <div className="client-item">
            <div className="client-logo-box">
              <img src="/client3.png" alt="Client 3" className="client-logo-img" />
            </div>
            <p className="client-name">Özgün Çocuklar</p>
          </div>
        </div>

        <button className="view-more-btn" onClick={() => navigate('/portfolio')}>
          Daha Fazlası
          <span className="arrow-icon">→</span>
        </button>
      </section>

    {/* Footer */}
    <footer className="luxury-footer">
      <div className="footer-main-content">
        {/* Left Side - About me */}
        <div className="footer-about">
          <h4 className="footer-brand">Tuba Sarıoğlu Busun</h4>
          <p className="footer-role">Social Media Expert & Marka Danışmanı</p>
          <p className="footer-description">
            Markaların dijital dünyada güçlenmesine yardımcı oluyor, 
            stratejik içerikler ve yaratıcı kampanyalarla fark yaratıyorum.
          </p>
          <div className="footer-location">
            <span className="location-icon">📍</span>
            <span>Denizli, Türkiye</span>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Hızlı Linkler</h4>
          <ul className="footer-link-list">
            <li><a onClick={() => navigate('/')}>Ana Sayfa</a></li>
            <li><a onClick={() => navigate('/aboutme')}>Hakkımda</a></li>
            <li><a onClick={() => navigate('/services')}>Hizmetlerimiz</a></li>
            {/*<li><a onClick={() => navigate('/portfolio')}>Portfolio</a></li>*/}
            <li><a onClick={() => navigate('/blog')}>Blog</a></li>
            <li><a onClick={() => navigate('/contact')}>İletişim</a></li>
          </ul>
        </div>

        {/* Right Side - Contact */}
        <div className="footer-contact">
          <h4 className="footer-heading">İletişim</h4>
          <div className="footer-contact-info">
            <p className="footer-contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:testoglutest05@gmail.com">testoglutest05@gmail.com</a>
            </p>
            <p className="footer-contact-item">
              <span className="contact-icon">📷</span>
              <a href="https://instagram.com/" target="_blank">Instagram</a>
            </p>
          </div>
          {/*
          <div className="footer-social">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span>📱</span>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span>📷</span>
            </a>
            <a href="mailto:testoglutest05@gmail.com" className="footer-social-link">
              <span>✉️</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <span>💼</span>
            </a>
          </div>
          */}
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Tuba Busun Sarıoğlu . Tüm hakları saklıdır.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Gizlilik Politikası</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-bottom-link">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Homepage;

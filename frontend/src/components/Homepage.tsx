import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Navigation */}
      <nav className="homepage-nav">
        <div className="nav-logo" onClick={() => navigate('')}><img src="logo.png" alt="Website Logo" /></div>
        <div className="nav-menu">
          <a className="nav-link" onClick={() => navigate('/aboutme')}>HAKKIMDA</a>
          <a className="nav-link" onClick={() => navigate('/services')}>HIZMETLERIMIZ</a>
          <a className="nav-link" onClick={() => navigate('/blog')}>BLOG</a>
          <a className="nav-link" onClick={() => navigate('/contact')}>ILETISIM</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          {/* Left Side - Image */}
          <div className="hero-image-side">
            <div className="hero-image-container">
              <img src="/tuba_abla_3.jpg" alt="Tuba Sarıoğlu Busun" className="hero-image" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="hero-content-side">
            <h1 className="hero-name">Tuba Sarıoğlu Busun</h1>
            <p className="hero-title">SOSYAL MEDYA UZMANI</p>

            {/* Location */}
            <div className="hero-location">
              <span>📍</span>
              <span>DENIZLI</span>
            </div>

            {/* Social Icons */}
            <div className="hero-social">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
                WA
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                IG
              </a>
              <a href="mailto:contact@example.com" className="social-icon" title="Email">
                EM
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Mutlu Müşteriler</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Yıllık Tecrübe</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projeler</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Başarı Oranı</div>
              </div>
            </div>

            {/* Description */}
            <p className="hero-description">
              Markaların dijital dünyada güçlenmesine, hedef kitleleriyle anlamlı 
              bağlar kurmasına ve sosyal medyada fark yaratmasına yardımcı oluyorum. 
              Stratejik içerikler ve yaratıcı kampanyalarla markanızı bir adım öne taşıyorum.
            </p>  

            {/* Buttons */}
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                İletişime Geçin
              </button>
              <button className="btn-secondary" onClick={() => navigate('/portfolio')}>
                Portfolyo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="services-heading">Hizmetlerimiz</h2>
        <p className="services-subheading">İhtiyaçlarınıza özel profesyonel çözümler</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3 className="service-title">Strateji Geliştirme</h3>
            <p className="service-description">
              Markanızın hedeflerine özel, kapsamlı sosyal medya stratejileri oluşturuyorum.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">✍️</div>
            <h3 className="service-title">İçerik Üretimi</h3>
            <p className="service-description">
              Hedef kitlenizle rezonans kuran, etkileyici gönderiler, hikayeler ve kampanyalar.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="service-title">Analiz ve Büyüme</h3>
            <p className="service-description">
              Veri odaklı içgörüler ve optimizasyon ile sosyal medya getirinizi maksimize ediyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <div className="footer-content">
          <div className="footer-left">
            <h5 className="footer-name">Tuba Sarıoğlu Busun</h5>
            <p className="footer-role">Social Media Expert</p>
            <div className="footer-location">
              <span>📍</span>
              <span>Denizli, Turkey</span>
            </div>
          </div>
          <div className="footer-right">
            <h5 className="footer-heading">Benimle İletişime Geçin</h5>
            <div className="footer-social">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <span>📱</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <span>📷</span>
              </a>
              <a href="mailto:contact@example.com" className="footer-social-link">
                <span>✉️</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
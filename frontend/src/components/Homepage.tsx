import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Navigation */}
      <nav className="homepage-nav">
        <div className="nav-logo" ><img src="logo.png" alt="Website Logo" /></div>
        <div className="nav-menu">
          <a href="#hakkimda" className="nav-link">HAKKIMDA</a>
          <a href="#hizmetlerimiz" className="nav-link">HIZMETLERIMIZ</a>
          <a href="#blog" className="nav-link">BLOG</a>
          <a href="#iletisim" className="nav-link">ILETISIM</a>
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
            <p className="hero-title">SOCIAL MEDIA EXPERT</p>

            {/* Location */}
            <div className="hero-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>ISTANBUL</span>
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
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>

            {/* Description */}
            <p className="hero-description">
              Helping brands grow their online presence and connect with their audience
              through strategic social media marketing and engaging content.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                İletişime Geçin
              </button>
              <button className="btn-secondary" onClick={() => navigate('/portfolio')}>
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="services-heading">Services</h2>
        <p className="services-subheading">Professional solutions tailored to your needs</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3 className="service-title">Strategy Development</h3>
            <p className="service-description">
              Creating comprehensive social media strategies tailored to your brand's goals.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">✍️</div>
            <h3 className="service-title">Content Creation</h3>
            <p className="service-description">
              Engaging posts, stories, and campaigns that resonate with your audience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="service-title">Analytics & Growth</h3>
            <p className="service-description">
              Data-driven insights and optimization to maximize your social media ROI.
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
              <span>Istanbul, Turkey</span>
            </div>
          </div>
          <div className="footer-right">
            <h5 className="footer-heading">Connect With Me</h5>
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
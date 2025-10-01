import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0 homepage-container">
      {/* Header */}
      <header className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top homepage-header">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold homepage-brand" href="#home">
            Tuba Sarıoğlu Busun
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link homepage-nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link homepage-nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link homepage-nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="row min-vh-100 d-flex align-items-center m-0 hero-section" style={{ backgroundImage: 'url(/hero_background.png)' }}>
        <div className="col-lg-6 px-5">
          <h1 className="display-4 fw-bold mb-4 hero-title">
            Sosyal Medya Uzmanı / Tuba Sarıoğlu Busun
          </h1>
          <p className="lead mb-4 hero-description">
            Helping brands grow their online presence and connect with their audience
            through strategic social media marketing and engaging content.
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-lg hero-btn-primary" onClick={() => navigate('/contact')}>İletişime Geçin...</button>
            <button
              className="btn btn-lg hero-btn-secondary"
              onClick={() => navigate('/portfolio')}
            >
              View Portfolio
            </button>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center hero-image-circle">
            <img src="/tuba_abla_3.jpg" alt="Tuba Sarıoğlu Busun" className="hero-image-circle-img" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="row py-5 m-0 services-section">
        <div className="col-12 text-center mb-5 px-5">
          <h2 className="display-5 fw-bold services-title">Services</h2>
          <p className="services-subtitle mt-3">Professional solutions tailored to your needs</p>
        </div>
        <div className="col-md-4 mb-4 px-4">
          <div className="card h-100 service-card">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <span className="fs-1">📈</span>
              </div>
              <h5 className="card-title fw-bold service-card-title">Strategy Development</h5>
              <p className="card-text service-card-text">
                Creating comprehensive social media strategies tailored to your brand's goals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 px-4">
          <div className="card h-100 service-card">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <span className="fs-1">✍️</span>
              </div>
              <h5 className="card-title fw-bold service-card-title">Content Creation</h5>
              <p className="card-text service-card-text">
                Engaging posts, stories, and campaigns that resonate with your audience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 px-4">
          <div className="card h-100 service-card">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <span className="fs-1">📊</span>
              </div>
              <h5 className="card-title fw-bold service-card-title">Analytics & Growth</h5>
              <p className="card-text service-card-text">
                Data-driven insights and optimization to maximize your social media ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 homepage-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold mb-3 footer-title">Tuba Sarıoğlu Busun</h5>
              <p className="footer-text">Social Media Expert</p>
              <div className="d-flex gap-2 align-items-center mt-3">
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <span className="footer-text">Location</span>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <h5 className="fw-bold mb-3 footer-title">Connect With Me</h5>
              <div className="d-flex gap-3 justify-content-md-end">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <span>📱</span>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <span>📷</span>
                </a>
                <a href="mailto:contact@example.com" className="footer-social-icon">
                  <span>✉️</span>
                </a>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="text-center">
            <p className="mb-0 footer-copyright">&copy; {new Date().getFullYear()} Tuba Sarıoğlu Busun. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;

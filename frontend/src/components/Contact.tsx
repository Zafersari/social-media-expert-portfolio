import { useNavigate } from "react-router-dom";
import "../styles/Portfolio.css";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid p-0 portfolio-container">
      {/* Header */}
      <header className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top portfolio-header">
        <div className="container-fluid px-5">
          <a className="navbar-brand fw-bold portfolio-brand" href="/">
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
                <a className="nav-link portfolio-nav-link" href="/#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link portfolio-nav-link" href="/#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link portfolio-nav-link" href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Portfolio Section */}
      <section className="row min-vh-100 d-flex align-items-center m-0 portfolio-section py-5">
        <div className="col-12 text-center px-5">
          <h1 className="display-4 fw-bold mb-4 portfolio-title">
            Portfolio
          </h1>
          <p className="lead mb-5 portfolio-description">
            Here are some of my recent social media campaigns and success stories.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 portfolio-card">
                <div className="card-body p-4">
                  <h5 className="card-title portfolio-card-title">Brand Campaign #1</h5>
                  <p className="card-text portfolio-card-text">Increased engagement by 300% for a local restaurant.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 portfolio-card">
                <div className="card-body p-4">
                  <h5 className="card-title portfolio-card-title">Brand Campaign #2</h5>
                  <p className="card-text portfolio-card-text">Grew followers by 500% for a fashion brand.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 portfolio-card">
                <div className="card-body p-4">
                  <h5 className="card-title portfolio-card-title">Brand Campaign #3</h5>
                  <p className="card-text portfolio-card-text">Boosted sales by 200% through targeted social ads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 portfolio-footer">
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

export default Contact;

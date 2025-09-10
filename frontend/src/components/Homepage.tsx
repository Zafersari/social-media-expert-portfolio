import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <section className="row min-vh-100 d-flex align-items-center bg-light">
        <div className="col-lg-6 px-5">
          <h1 className="display-4 fw-bold text-primary mb-4">
            Social Media Expert / Tuba Sarıoğlu Busun
          </h1>
          <p className="lead mb-4">
            Helping brands grow their online presence and connect with their audience 
            through strategic social media marketing and engaging content.
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-primary btn-lg">Get Started</button>
            <button 
              className="btn btn-outline-primary btn-lg"
              onClick={() => navigate('/portfolio')}
            >
              View Portfolio
            </button>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="bg-primary rounded-circle mx-auto" 
               style={{width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span className="text-white fs-1">📱</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="row py-5">
        <div className="col-12 text-center mb-5">
          <h2 className="display-5 fw-bold">Services</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <div className="mb-3">
                <span className="fs-1">📈</span>
              </div>
              <h5 className="card-title">Strategy Development</h5>
              <p className="card-text">
                Creating comprehensive social media strategies tailored to your brand's goals.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <div className="mb-3">
                <span className="fs-1">✍️</span>
              </div>
              <h5 className="card-title">Content Creation</h5>
              <p className="card-text">
                Engaging posts, stories, and campaigns that resonate with your audience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <div className="mb-3">
                <span className="fs-1">📊</span>
              </div>
              <h5 className="card-title">Analytics & Growth</h5>
              <p className="card-text">
                Data-driven insights and optimization to maximize your social media ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
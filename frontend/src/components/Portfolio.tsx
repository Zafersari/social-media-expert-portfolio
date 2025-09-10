function Portfolio() {
  return (
    <div className="container-fluid">
      <section className="row min-vh-100 d-flex align-items-center">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold text-primary mb-4">
            Portfolio
          </h1>
          <p className="lead mb-4">
            Here are some of my recent social media campaigns and success stories.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Brand Campaign #1</h5>
                  <p className="card-text">Increased engagement by 300% for a local restaurant.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Brand Campaign #2</h5>
                  <p className="card-text">Grew followers by 500% for a fashion brand.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Brand Campaign #3</h5>
                  <p className="card-text">Boosted sales by 200% through targeted social ads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

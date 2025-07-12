import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to Admin Panel
              </h1>
              <p className="lead mb-4">
                A powerful and intuitive admin dashboard for managing your application. 
                Monitor users, analyze data, and control your system with ease.
              </p>
              <div className="d-flex gap-3">
                <button 
                  className="btn btn-light btn-lg"
                  onClick={() => navigate('/users')}
                >
                  <i className="bi bi-people-fill me-2"></i>
                  Manage Users
                </button>
                <button className="btn btn-outline-light btn-lg">
                  <i className="bi bi-graph-up me-2"></i>
                  View Analytics
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-3 p-5">
                  <i className="bi bi-speedometer2 display-1 mb-3"></i>
                  <h3>Dashboard Overview</h3>
                  <p className="mb-0">Real-time monitoring and management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3">Key Features</h2>
              <p className="lead text-muted">
                Everything you need to manage your application efficiently
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-people-fill text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">User Management</h5>
                  <p className="card-text text-muted">
                    Easily manage user accounts, permissions, and access levels with our intuitive interface.
                  </p>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => navigate('/users')}
                  >
                    View Users
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-graph-up text-success fs-3"></i>
                  </div>
                  <h5 className="card-title">Analytics</h5>
                  <p className="card-text text-muted">
                    Monitor performance, track metrics, and gain insights with comprehensive analytics.
                  </p>
                  <button className="btn btn-outline-success">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
                    <i className="bi bi-gear-fill text-warning fs-3"></i>
                  </div>
                  <h5 className="card-title">Settings</h5>
                  <p className="card-text text-muted">
                    Configure your application settings, preferences, and system parameters.
                  </p>
                  <button className="btn btn-outline-warning">
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <h2 className="display-6 fw-bold text-primary mb-2">1,234</h2>
                  <p className="text-muted mb-0">Active Users</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <h2 className="display-6 fw-bold text-success mb-2">98.9%</h2>
                  <p className="text-muted mb-0">Uptime</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <h2 className="display-6 fw-bold text-warning mb-2">24/7</h2>
                  <p className="text-muted mb-0">Support</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <h2 className="display-6 fw-bold text-info mb-2">99.2%</h2>
                  <p className="text-muted mb-0">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-6 fw-bold mb-4">Quick Actions</h2>
              <p className="lead text-muted mb-5">
                Get started with the most common administrative tasks
              </p>
              
              <div className="row g-3 justify-content-center">
                <div className="col-auto">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate('/users')}
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Add New User
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-file-earmark-text me-2"></i>
                    Generate Report
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-gear me-2"></i>
                    System Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2025 Admin Panel. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <small className="text-muted">
                Built with React & Bootstrap
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './herosection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Decorative elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      <div className="hero-decoration hero-decoration-3"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Your Path to <span>Better</span> Health
            </h1>
            <p>
              Personalized health care plans, expert guidance, and tools to help you achieve your wellness goals.
            </p>
            <div className="hero-buttons">
              <Link to="/health-plans" className="hero-button">
                Get Your Plan
              </Link>
              <Link to="/about" className="hero-button">
                Learn More <ArrowRight size={16} className="button-icon" />
              </Link>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Plans</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Experts</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image-container">
            <img 
              src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Healthy lifestyle" 
              className="hero-image"
            />
            
            {/* Floating card 1 */}
            <div className="floating-card floating-card-1">
              <div className="card-content">
                <div className="card-icon card-icon-orange">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3>Personalized for You</h3>
                  <p>Plans adjusted to your unique needs</p>
                </div>
              </div>
            </div>
            
            {/* Floating card 2 */}
            <div className="floating-card floating-card-2">
              <div className="card-content">
                <div className="card-icon card-icon-red">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3>Save Time</h3>
                  <p>Ready-to-use health plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

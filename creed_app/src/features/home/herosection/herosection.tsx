import { Link } from 'react-router-dom';
import { Zap, Activity, Heart } from 'lucide-react';
import HeroImage from '/src/assets/images/hero_image.jpg'; // Import the image
import './herosection.css';

const HeartbeatAnimation = () => {
  return (
    <div className="heartbeat-container">
      <div className="heartbeat-wrapper">
        <svg width="240" height="120" viewBox="0 0 240 120" className="heartbeat-svg">
          <defs>
            <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E53935" />
              <stop offset="50%" stopColor="#FF5722" />
              <stop offset="100%" stopColor="#E53935" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M20,60 L60,60 L80,30 L100,90 L120,20 L140,100 L160,60 L220,60"
            stroke="url(#heartbeatGradient)"
            strokeWidth="4"
            fill="none"
            className="heartbeat-line"
            filter="url(#glow)"
          />
        </svg>
        <div className="heartbeat-label">
          <div  className="heartbeat-text" >
            Your unique rhythm
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Animated Geometric Shapes */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>

        {/* Futuristic Grid Lines */}
        <div className="grid-lines">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="grid-cell"></div>
          ))}
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Zap className="badge-icon" />
            Next-Generation Healthcare
          </div>

          <h1 className="hero-title">
            Your health is our{" "}
            <span className="gradient-text">creed</span>
          </h1>
          
       

          <p className="hero-description">
            Delivering healthcare through customized nutrition plans backed by medical recommendations. Because caring
            is the best medicine.
          </p>

          <div className="hero-buttons">
            <Link to="/health-plans" className="primary-button">
              Start Your Journey
              <Zap className="button-icon" />
            </Link>
            <Link to="/demo" className="secondary-button">
              Watch Demo
            </Link>
          </div>

          {/* Heartbeat Animation */}
          <HeartbeatAnimation />
        </div>

        {/* Hero Image Display */}
        <div className="hero-image-display">
          <div className="image-wrapper">
            <img
              src={HeroImage}
              alt="Person meditating"
              className="main-hero-image"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;

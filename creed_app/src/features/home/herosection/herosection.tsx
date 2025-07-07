import { Link } from 'react-router-dom';
import { Zap, Heart } from 'lucide-react';
import HeroImage from '/src/assets/images/hero_image.jpg';
import CreedLogo from '/src/assets/images/creed_logo.png';
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
      </div>
    </div>
  );
};

const HeartbeatQuote = () => {
  return (
    <div className="heartbeat-label">
      <div className="heartbeat-text">
        <blockquote className="text-2xl md:text-3xl lg:text-2xl font-serif text-white leading-relaxed " style={{ color: 'black' }}>
          "You deserve a care plan as<br />
          <span className="text-red-400 relative">
            unique
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-400"></div>
          </span>{' '}
          as your{' '}
          <span className="text-red-400 relative">
            heartbeat
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-400"></div>
          </span>
          ."
        </blockquote>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Animated Shapes and Grid */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
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
            Care is our <span className="gradient-text">Creed</span>
          </h1>

          <p className="hero-description">
            Experience healthcare that listens to your body, understands your needs, and grows with your life.
          </p>

          <div className="hero-buttons">
            <Link to="/" className="primary-button">
              Start Your Journey <Zap className="button-icon" />
            </Link>
          </div>

          {/* Heartbeat animation and quote centered together */}
          <div className="heartbeat-flex-center">
            <HeartbeatAnimation />
            <HeartbeatQuote />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
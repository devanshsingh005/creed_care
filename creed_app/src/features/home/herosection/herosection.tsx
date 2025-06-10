import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Your health is our <span className="highlight">creed</span></h1>
        <p>
          Because caring is the best medicine. Experience healthcare that listens to your body,
          understands your needs, and grows with your life.
        </p>
        <div className="hero-buttons">
          <button className="start-plan">Start Your Plan</button>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="stats">
          <div><strong>10k+</strong><br />Happy Users</div>
          <div><strong>500+</strong><br />Success Stories</div>
          <div><strong>50+</strong><br />Experts</div>
        </div>
        <div className="tags-container">
          <div className="tag pink">Physical Health</div>
          <div className="tag blue">Mental Wellbeing</div>
          <div className="tag green">Nutrition that Nourishes</div>
          <div className="tag purple">Wellness that Lasts</div>
          <div className="tag orange large">For Your Family</div>
        </div>
        <p className="footer-text">All of it in one place. <br /> <strong>For life.</strong></p>
      </div>

      <div className="hero-right">
        <div className="quote-card">
          <p className="quote-text">"You deserve a care plan as <span className="underline">unique</span> as your <span className="heartbeat-text">heartbeat</span>."</p>
          <div className="heartbeat-animation"></div>
          <p className="quote-subtext">Because every heartbeat tells a story, and every story deserves personalized care.</p>
        </div>
        <div className="sub-badge">Your unique rhythm</div>
      </div>
    </section>
  );
};

export default HeroSection;

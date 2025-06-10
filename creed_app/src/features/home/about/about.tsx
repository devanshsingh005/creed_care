import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Creed</h2>
          <p className="about-subtitle">Empowering Digital Innovation</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              At Creed, we're dedicated to transforming ideas into digital reality. 
              Our team of experts combines technical excellence with creative innovation 
              to deliver solutions that drive business growth and user engagement.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <h3>Innovation</h3>
                <p>Pushing boundaries with cutting-edge technology</p>
              </div>
              <div className="feature-item">
                <h3>Excellence</h3>
                <p>Delivering quality in every project</p>
              </div>
              <div className="feature-item">
                <h3>Collaboration</h3>
                <p>Working together to achieve greatness</p>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
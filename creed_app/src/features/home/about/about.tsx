import React from 'react';
import { Heart, Users, Target } from 'lucide-react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Header */}
          <div className="about-header">
            <h2>About Creed</h2>
            <p className="about-tagline">
              Your health is our creed — because caring is the best medicine.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon">
                <Heart className="icon" />
              </div>
              <h3>Science & Compassion</h3>
              <p>
                Delivering healthcare through customized nutrition plans backed by medical recommendations.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <Users className="icon" />
              </div>
              <h3>Long-Term Wellness</h3>
              <p>
                We believe in sustainable wellness solutions for every individual's unique needs.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <Target className="icon" />
              </div>
              <h3>Your Wellness, Our Mission</h3>
              <p>
                Committed to your health journey with personalized care and expert guidance.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="story-section">
            <h3>Our Story</h3>
            <p>
              Imagine waking up energized, not drained. At Creed.care, we understand the struggle to find balance in a busy world—because we've been there too. That's why we make self-care a shared journey, with interactive workshops, personalized plans, and a supportive community. Join us to discover your best self, connect with others, and start a new, empowering chapter in your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
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
              Care is our Creed — because caring is the best medicine.
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

          {/* Our Story Section */}
          <div className="our-story-card">
            <h3 className="our-story-title">Our Story</h3>
            <p className="our-story-main">
              What began in 2024 as a heartfelt idea has grown into a thriving wellness movement. With the launch of our MVP in 2025 and over 100 early users onboarded, Creedcare is now expanding rapidly across Tamil Nadu and South India — transforming lives with personalized care, one person at a time.
            </p>
            <blockquote className="our-story-quote">
              <em>
                "Imagine waking up energized, not drained. At Creed.care, we understand the struggle to find balance in a busy world—because we've been there too. That's why we make self-care a shared journey, with interactive workshops, personalized plans, and a supportive community."
              </em>
            </blockquote>
            <p className="our-story-cta">
              Join us to discover your best self, connect with others, and start a new, empowering chapter in your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import CreedLogo from '/src/assets/images/creed_logo.png';
import './footer.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routepath';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div style={{ backgroundColor: 'white' }}>
                <Link to={ROUTES.HOME}>
                  <img src={CreedLogo} alt="Creed Logo" className="creed-logo-image" />
                </Link>
              </div>
              <div>
                <h3>Creed</h3>
                <p>a personal lifestyle health care</p>
              </div>
            </div>
            <p className="brand-description">
              Care is our creed. Delivering personalized nutrition and wellness care through medical expertise and compassionate support.
            </p>
            <div className="brand-tagline">
              <Heart className="heart-icon" />
              <span>Caring is the best medicine</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#whychooseus">Why Choose Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Personalized Nutrition</a></li>
              <li><a href="#">Elder Care</a></li>
              <li><a href="#">Health Monitoring</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact ">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+91 9342093042</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>connectoncreed@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>
                  Coqub co working space No1/1, M-Block second floor Agathiyar Nagar, Chennai-600049
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/creedcare/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>IG</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61576851643272"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>FB</span>
                </a>
                <a
                  href="https://x.com/CreedCare"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>TW</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © 2024 Creed Personal Lifestyle Healthcare. All rights reserved.
          </p>
          <div className="footer-links-bottom">
            <Link to={ROUTES.LEGAL}>Privacy Policy</Link>
            <Link to={ROUTES.LEGAL}>Terms & Conditions</Link>
            <Link to={ROUTES.LEGAL}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
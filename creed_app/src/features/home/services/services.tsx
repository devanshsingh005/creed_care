import React from 'react';
import { Heart, Video, Users, MessageCircle, Activity, Utensils } from "lucide-react";
import './services.css';

const services = [
  {
    icon: Heart,
    title: "Personalized Nutrition Plans",
    description: "Comprehensive health and nutrition services designed to support your wellness journey with personalized care and expert guidance.",
    features: [
      "Online Consultations",
      "Custom meal planning",
      "Nutritional assessments",
      "Progress tracking"
    ],
    color: "yellow"
  },
  {
    icon: Video,
    title: "Teleconsultation Services",
    description: "Connect with certified nutritionists and healthcare professionals through secure video calls and chat support.",
    features: [
      "Video consultations",
      "Chat support",
      "File sharing",
      "Appointment scheduling"
    ],
    color: "orange"
  },
  {
    icon: Users,
    title: "Wellness Workshops",
    description: "Interactive group sessions covering nutrition education, cooking classes, and lifestyle coaching with community support.",
    features: [
      "Live workshops",
      "Recorded sessions",
      "Group discussions",
      "Expert-led sessions"
    ],
    color: "amber"
  },
  {
    icon: MessageCircle,
    title: "Peer Support Circles",
    description: "Connect with like-minded individuals on similar wellness journeys through moderated online communities.",
    features: [
      "Peer mentorship",
      "Group conversations",
      "Success stories",
      "Motivation support"
    ],
    color: "yellow-dark"
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Track your progress with regular health assessments and monthly check-ins to stay on track with your goals.",
    features: [
      "Health tracking",
      "Progress reports",
      "Regular check-ins",
      "Goal adjustments"
    ],
    color: "orange-dark"
  },
  {
    icon: Utensils,
    title: "Meal Delivery Partnership",
    description: "Optional meal delivery services aligned with your personalized nutrition plan for ultimate convenience and success.",
    features: [
      "Prepared meal kits",
      "Fresh ingredients",
      "Recipe cards",
      "Flexible scheduling"
    ],
    color: "amber-dark"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our <span className="highlight">Services</span></h2>
          <p>
            Comprehensive health and nutrition services designed to support your wellness journey with personalized care, expert guidance, and ongoing support.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                <div className={`service-icon ${service.color}`}>
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
              </div>
              <div className="service-content">
                <p className="service-description">
                  {service.description}
                </p>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <div className="feature-dot"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="learn-more-btn">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 
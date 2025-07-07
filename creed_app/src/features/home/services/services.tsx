import React from 'react';
import { Heart, Video, Users, MessageCircle, Activity, Utensils } from "lucide-react";
import './services.css';

// Define the Service interface with optional comingSoon property
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  comingSoon?: boolean;
}

// Annotate the services array with the Service[] type
const services: Service[] = [
  {
    icon: Heart,
    title: "Personalized Nutrition ",
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
    icon: Users,
    title: "Elder Care ",
    description: "Compassionate support for seniors, promoting independence, safety, health, and companionship in everyday living.",
    features: [
      "Daily Assistance",
      "Health Monitoring",
      "Social Support",
      "Safe Mobility"
    ],
    color: "orange",
  },
  /*
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
    color: "amber",
    comingSoon: true 
  },
  */
 /*
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
    color: "yellow-dark",
    comingSoon: true
  },
  */
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
    color: "orange-dark",
  },
  /*
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
    color: "amber-dark",
    comingSoon: true
  }
  */
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our <span className="highlight">Services</span></h2>
          <p className='text-red-500'>
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
                <h3 >{service.title}</h3>
              </div>
              <div className="service-content">
                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <span 
                    className="coming-soon-badge" 
                    style={{
                      color: '#fff',
                      backgroundColor: 'orange',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      marginBottom: '8px'
                    }}
                  >
                    Coming Soon
                  </span>
                )}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

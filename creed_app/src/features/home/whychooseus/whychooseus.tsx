import React from 'react';
import { 
  UserCheck, Heart, Award, TrendingUp, Clock, 
  Calendar, BookOpen, Users, Smartphone 
} from "lucide-react";
import './whychooseus.css';

const whyChooseUsItems = [
  {
    icon: UserCheck,
    title: "Medical Supervision",
    desc: "All nutrition plans supervised by qualified doctors and certified nutritionists",
    color: "yellow-4"
  },
  {
    icon: Heart,
    title: "Comprehensive Care",
    desc: "From children to elders, athletes to individuals with health conditions - we cover everyone",
    color: "yellow-4"
  },
  // {
  //   icon: Award,
  //   title: "Evidence-Based Planning",
  //   desc: "Diet plans based on scientific research with measurable results",
  //   color: "green-emerald"
  // },
  {
    icon: TrendingUp,
    title: "Trusted by Families",
    desc: "Thousands of families trust us for their nutritional health management",
    color: "yellow-4"
  },
  {
    icon: Clock,
    title: "24/7 Support & Teleconsultation",
    desc: "Round-the-clock support with virtual consultations",
    color: "yellow-4"
  },
  {
    icon: Calendar,
    title: "Kickoff Workshop",
    desc: "Comprehensive onboarding workshop to start your journey right",
    color: "yellow-4"
  },
  // {
  //   icon: BookOpen,
  //   title: "Monthly Wellness Modules",
  //   desc: "Continuous learning through monthly educational modules",
  //   color: "indigo-purple"
  // },
  {
    icon: Heart,
    title: "Personalized Health-Care",
    desc: "Wide range of specializations from children to athletes",
    color: "yellow-4"
  },
  // {
  //   icon: Users,
  //   title: "Peer Support Circles",
  //   desc: "Connect with others on similar health journeys",
  //   color: "cyan-blue"
  // },
  // {
  //   icon: Smartphone,
  //   title: "Access to Digital Tools",
  //   desc: "Modern technology including WhatsApp support and virtual consultations",
  //   color: "yellow-orange"
  // }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="whychooseus" className="why-choose-us">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2>Why Choose Us</h2>
          <p>
            Trusted by families, individuals with health conditions, and fitness enthusiasts for comprehensive
            nutritional health management
          </p>
        </div>

        <div className="why-choose-grid">
          {whyChooseUsItems.map((item, index) => (
            <div key={index} className="why-choose-card">
              <div className={`icon-container ${item.color}`}>
                <item.icon className="icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 
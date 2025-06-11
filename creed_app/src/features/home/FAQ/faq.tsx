import React, { useState } from 'react';
import './faq.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "What makes Creed different from other healthcare platforms?",
    answer: "We combine medical supervision with personalized nutrition plans, 24/7 support, and a strong community focus. Our approach covers all life stages from children to elders, and all conditions from diabetes to sports nutrition."
  },
  {
    id: "item-2",
    question: "How are the nutrition plans personalized?",
    answer: "Our nutrition plans are created based on your medical history, current health status, lifestyle, preferences, and goals. Each plan is reviewed and approved by our medical team including qualified doctors and certified nutritionists."
  },
  {
    id: "item-3",
    question: "What specializations do you offer?",
    answer: "We offer comprehensive care including medical nutrition therapy, diabetic care, children nutrition, pre/post pregnancy care, elder care, sports nutrition, gut health, fertility support, and many other specialized areas based on individual needs."
  },
  {
    id: "item-4",
    question: "How does the 24/7 support work?",
    answer: "You have access to our support team through multiple channels including WhatsApp support, phone, and video consultations. We also provide teleconsultation services and emergency support when needed."
  },
  {
    id: "item-5",
    question: "Do you provide community support?",
    answer: "Yes! We have peer support circles where you can connect with others on similar health journeys. We also offer monthly wellness modules, educational workshops, and maintain a proven track record with satisfied clients."
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get answers to common questions about our services</p>
        </div>

        <div className="faq-accordion">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${openItem === item.id ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
                <span className="faq-icon">
                  {openItem === item.id ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
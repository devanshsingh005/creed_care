import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import './contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Let Netlify handle submission
    const form = e.target as HTMLFormElement;
    if (form.checkValidity()) {
      form.submit(); // let Netlify handle it
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            Ready to start your wellness journey? Get in touch with our team of experts 
            and take the first step towards better health.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We're here to support your health journey 24/7. Reach out to us through any of the channels below.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon phone-icon"><Phone className="icon" /></div>
                <div>
                  <h4>Phone</h4>
                  <p className="method-info">+91 9342093042</p>
                  <p className="method-note">24/7 Support Available</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon email-icon"><Mail className="icon" /></div>
                <div>
                  <h4>Email</h4>
                  <p className="method-info">hello@creed.care</p>
                  <p className="method-note">Response within 2 hours</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon location-icon"><MapPin className="icon" /></div>
                <div>
                  <h4>Office</h4>
                  <p className="method-info justified-address">
  Coqub Co-working Space<br />
  No1/1, M-Block Second Floor<br />
  Agathiyar Nagar, Chennai - 600049
</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon hours-icon"><Clock className="icon" /></div>
                <div>
                  <h4>Hours</h4>
                  <p className="method-info">24/7 Teleconsultation<br />Office: Mon-Fri 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="contact-form-card">
              <h3>Send us a Message</h3>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your health goals or ask any questions..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message <Send className="button-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
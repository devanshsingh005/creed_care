import React from "react";
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => (
  <div className="terms-container">
    <h1>Terms &amp; Conditions – CreedCare</h1>
  
    <p>
      Welcome to CreedCare! By using our website and services, you agree to these Terms &amp; Conditions.
    </p>

    <h2>1. Eligibility</h2>
    <p>
      You must be 18 years or older to use our services. By using our platform, you confirm that you meet this requirement.
    </p>

    <h2>2. Use of Services</h2>
    <p>You agree to:</p>
    <ul>
      <li>Use our platform only for lawful, personal, and non-commercial purposes.</li>
      <li>Not misuse, hack, or disrupt our services.</li>
    </ul>

    <h2>3. Health Disclaimer</h2>
    <p>
      CreedCare provides personalized wellness suggestions, not medical advice. Always consult a certified healthcare professional for any medical decisions.<br/>
      We do not diagnose, treat, or cure health conditions.
    </p>

    <h2>4. Intellectual Property</h2>
    <p>
      All content, logos, and technology on our site are the property of CreedCare and protected by intellectual property laws. You may not copy, reproduce, or distribute them without our permission.
    </p>

    <h2>5. Limitation of Liability</h2>
    <p>We are not liable for:</p>
    <ul>
      <li>Any direct or indirect damages from using our site or recommendations.</li>
      <li>Decisions made by users based on platform suggestions.</li>
    </ul>

    <h2>6. Account Termination</h2>
    <p>
      We reserve the right to suspend or terminate accounts that violate our terms.
    </p>

    <h2>7. Governing Law</h2>
    <p>
      These Terms are governed by the laws of India (or your relevant jurisdiction, if different).
    </p>

    <h2>8. Contact Us</h2>
    <p>
      If you have questions about these Terms or our services, email us at <a href="mailto:support@creed.care">support@creed.care</a> or use the contact form on our website.
    </p>
  </div>
);

export default TermsAndConditions;
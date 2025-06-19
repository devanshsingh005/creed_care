import React from 'react';
import creedLogo from '../../../assets/images/creed_logo.png';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={creedLogo} alt="Creed Logo" height={48} />
      </div>
      <div className="navbar-links">
        {/* Add navigation links here */}
      </div>
    </nav>
  );
};

export default Navbar; 
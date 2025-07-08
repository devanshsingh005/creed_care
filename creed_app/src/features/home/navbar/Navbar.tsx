import React from 'react';
import creedLogo from '../../../assets/images/creed_logo.png';
import './navbar.css';
import { ROUTES } from '../../../constants/routepath'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={ROUTES.HOME}> <img src={creedLogo} alt="Creed Logo" height={48} />
        </Link>
      </div>
      <div className="navbar-links">
        {/* Add navigation links here */}
      </div>
    </nav>
  );
};

export default Navbar; 
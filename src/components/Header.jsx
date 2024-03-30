import React, { useState } from 'react';
import { Link } from 'react-scroll';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="nav-links">
          <h3> shukri</h3>
        </Link>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
            <Link to="BannerSection" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="About" className="nav-links">
              Bio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Skills" className="nav-links">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Projects" className="nav-links">
                Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Contact" className="nav-links">
                Contact
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
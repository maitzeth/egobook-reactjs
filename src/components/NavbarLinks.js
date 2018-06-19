import React from 'react';

const Header = props => {
  return (
    <nav className={`navbar ${props.isActive ? 'active' : ''}`}>
      <ul className="navbar-container">
        <li className="navbar-item">Icon</li>
        <li className="navbar-item">Icon</li>
        <li className="navbar-item">Icon</li>
      </ul>
    </nav>
  );
};

export default Header;
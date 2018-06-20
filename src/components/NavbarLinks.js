import React from 'react';

const Header = props => {
  return (
    <nav className={`navbar ${props.isActive ? 'active' : ''}`}>
      <ul className="navbar-container">
        <li className="navbar-item"><i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i></li>
        <li className="navbar-item"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></li>
        <li className="navbar-item"><i className="fa fa-power-off fa-2x" aria-hidden="true"></i></li>
      </ul>
    </nav>
  );
};

export default Header;
import React from 'react'

const NavbarButton = props => {

  return (
    <nav
      onClick={props.handleNavbar}
      className={`mobile ${props.isActive ? 'active' : ''}`}
    >
      <span className="mobile-item" />
      <span className="mobile-item" id="menu-item-2" />
      <span className="mobile-item" id="menu-item-3" />
    </nav>
  )
}

export default NavbarButton
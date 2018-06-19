import React, { Component, Fragment } from 'react';
import NavbarButton from './NavbarButton'
import NavbarLinks from './NavbarLinks'

class NavbarContainer extends Component {
  state = {
    isActive: false,
  }

  handleNavbar = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <Fragment>
        <NavbarButton
          handleNavbar={this.handleNavbar}
          isActive={this.state.isActive}
        />
        <NavbarLinks isActive={this.state.isActive} />
      </Fragment>
    );
  }
}

export default NavbarContainer;
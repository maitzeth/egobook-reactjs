import React, { Component, Fragment } from 'react';
import './styles/style.scss';
import NavbarContainer from './components/NavbarContainer';
import BooksContainer from './components/BooksContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavbarContainer />
        <BooksContainer />
      </Fragment>
    );
  }
}

export default App;

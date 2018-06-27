import React, { Component, Fragment } from 'react';
import './styles/style.scss';
import NavbarContainer from './components/NavbarContainer';
import BooksContainer from './components/BooksContainer';
import Modal from 'react-responsive-modal';
import AddBookForm from './components/AddBookForm';

class App extends Component {
  state = {
    open: false,
    books: []
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  addBook = book => {
    const books = this.state.books;

    books.push(book);

    this.setState({
      books
    });

    localStorage.setItem('myBooks', JSON.stringify(this.state.books));
  };

  deleteBook = book => {
    const books = this.state.books;

    books.splice(book, 1);

    this.setState({
      books: books
    })


  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem('myBooks');

    if (localStorageRef) {
      this.setState({ books: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'myBooks',
      JSON.stringify(this.state.books)
    );
  }


  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <NavbarContainer />
        <main className="container mt-xs-4">
          <div className="row my-1">
            <div className="col-12">
              <BooksContainer books={this.state.books} deleteBook={this.deleteBook} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button
                onClick={this.onOpenModal}
                className="btn btn-primary">Agregar libro</button>
              <Modal
                open={open}
                onClose={this.onCloseModal}
                center
                classNames={{ overlay: "custom-overlay", modal: "custom-modal" }}
              >
                <AddBookForm
                  onCloseModal={this.onCloseModal}
                  addBook={this.addBook}
                />
              </Modal>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;

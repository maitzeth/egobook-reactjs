import React, { Component } from 'react';
import Book from './Book';

class BooksContainer extends Component {
  render() {
    return (
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Editorial</th>
            <th scope="col">Autor</th>
            <th scope="col">Edicion</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.books.map((book, i) => (
              <Book key={i} index={i} details={book} deleteBook={this.props.deleteBook} />
            ))

          }
        </tbody>
      </table>
    );
  }
}

export default BooksContainer;
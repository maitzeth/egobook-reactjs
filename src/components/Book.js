import React, { Component } from 'react';


class Book extends Component {
  handleDelete = event => {
    event.preventDefault();

    const bookId = this.props.index;

    this.props.deleteBook(bookId);

  }

  render() {
    return (
      <tr>
        <td>{this.props.details.nombre}</td>
        <td>{this.props.details.editorial}</td>
        <td>{this.props.details.autor}</td>
        <td className="delete-book-td">{this.props.details.edicion} <span className="delete-book" onClick={this.handleDelete}><i className="fa fa-times" aria-hidden="true"></i></span></td>
      </tr>
    );
  }
}

export default Book;
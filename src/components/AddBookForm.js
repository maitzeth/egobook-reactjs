import React, { Component } from 'react';
import Input from './Input';

class AddBookForm extends Component {
  state = {
    nombre: '',
    editorial: '',
    autor: '',
    edicion: ''
  }

  handleChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });

    if (event.target.name === "edicion") {
      const re = /^[0-9\b]+$/;
      const isAllowedToSend = re.test(event.target.value);

      if (!isAllowedToSend) {
        event.target.value = ""
      }
    }

  };

  handleSubmit = event => {
    event.preventDefault();

    const book = {
      nombre: this.state.nombre,
      editorial: this.state.editorial,
      autor: this.state.autor,
      edicion: this.state.edicion
    };

    this.props.addBook(book);
    this.props.onCloseModal();
  }

  render() {
    return (
      <div className="form-wrapper">
        <h2 className="text-center mb-1">Agregar libro</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            inputType={"text"}
            title={"Nombre"}
            name={"nombre"}
            handleChange={this.handleChange}
          />
          <Input
            inputType={"text"}
            title={"Editorial"}
            name={"editorial"}
            handleChange={this.handleChange}
          />
          <Input
            inputType={"text"}
            title={"Autor"}
            name={"autor"}
            handleChange={this.handleChange}
          />
          <Input
            inputType={"text"}
            title={"Edicion"}
            name={"edicion"}
            handleChange={this.handleChange}
            handleOnlyNumbers={this.handleOnlyNumbers}
          />

          <div className="text-center">
            <button type="submit" className="btn btn-secondary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBookForm;
import React, { Component } from 'react';
import Label from './Label';

class BooksContainer extends Component {
  render() {
    return (
      <main className="container">
        <div className="row my-1">
          <div className="col-12">
            <table className="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Editorial</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Edicion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default BooksContainer;
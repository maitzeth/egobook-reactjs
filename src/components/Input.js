import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper group">
        <input
          className="default-form"
          name={this.props.name}
          type={this.props.inputType}
          value={this.props.socialinput}
          onChange={this.props.handleChange}
          required
        />
        <span className="bar"></span>
        <label>{this.props.title}</label>
      </div>
    );
  }
}

export default Input;
import React, { Component } from "react";

class AddItem extends Component {
  state = {
    value: ""
  };
  inputIsEmpty = () => {
    return this.state.value === "";
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  addItem = e => {
    e.preventDefault();
    // this.props.onAddItem(e.target.value); // Nope! target is button
    this.props.onAddItem(this.state.value);
  };
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

export default AddItem;

import React, { Component } from "react";
import "./App.css";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import ItemList from "./ItemList";
import logo from './logo.svg';

class App extends Component {
  state = {
    items: []
  };

  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - Controlled Components</p>
        </header>
        <main className="App-main">
          <h2>Shopping List</h2>
          <AddItem onAddItem={this.addItem} />
          <DeleteItem
            onDeleteLastItem={this.deleteLastItem}
            onNoItemsFound={this.noItemsFound()}
          />
          <ItemList items={this.state.items} />
        </main>
      </div>
    );
  }
}

export default App;

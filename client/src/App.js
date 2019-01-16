import React, { Component } from 'react';
import './App.css';
import Books from './components/books';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Books />
        </header>
      </div>
    );
  }
}

export default App;

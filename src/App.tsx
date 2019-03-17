import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Тестовое задание ver.2.0</h1> 
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
        </div>
      </div>
    );
  }
}

export default App;

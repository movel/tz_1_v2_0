import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import './nav.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Тестовое задание ver.2.0</h1>
          <nav role="full-horizontal" className="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import About from './components/About'
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
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Route path="/" exact render={() => <h1>Home Page</h1>} />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default App;

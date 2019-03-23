import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import News from './components/News'

type Props = {
  
};

type State = {
  count: number;
};

class App extends React.Component<Props, State> {
  readonly state: State = {
    count: 0,
  };

  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/news">NEWS</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/news" component={ News } />
      </div>
    );
  }
}

export default App;

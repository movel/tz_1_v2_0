import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import News from './components/News'
import Profile from './components/Profile'

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
              <NavLink to="/login">LOGIN</NavLink>
            </li>
            <li>
              <NavLink to="/news">NEWS</NavLink>
            </li>
            <li>
              <NavLink to="/profile">PROFILE</NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        
        <div className="page">
          <Route path="/" exact component={ Home } />
          <Route path="/login" exact component={ Login } />
          <Route path="/news" component={ News } />
          <Route path="/profile" component={ Profile } />
        </div> 
        
      </div>
    );
  }
}

export default App;

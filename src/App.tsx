import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import { News } from './components/News/News'
import { About } from './components/About/About'

interface IAppProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = props => {

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
        
        <p> Автор: { props.name } | Сайт: { props.site } </p>

        <hr />

        {props.children}

        <hr />
        
        <div className="page">
          <Route path="/" exact component={ Home } />
          <Route path="/login" exact component={ Login } />
          <Route path="/news" component={ News } />
          <Route path="/profile/:source" component={ About } />
          <Route path="/profile" component={ About } />
        </div> 
        
      </div>
    );
}

const RoutedApp = () => {
  return (
    <App name="Max Frontend" site="maxpfrontend.ru">
      
    </App>
  )
}

export { RoutedApp };

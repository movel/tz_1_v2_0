import * as React from 'react';
import { Route, NavLink, Switch, RouteComponentProps } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import { Authenticated } from './components/common/Authenticated'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { About } from './components/About/About'
import { PageNotFound } from './components/PageNotFound/PageNotFound'

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
          <Switch>
            
              <Route path="/" exact component={ Home } />
              <Route path="/login" exact component={ Login } />
              <Route path="/news" component={ News } />
              <Route path="/profile" component={ About } />
            
              <Route component={ PageNotFound } />
            
          </Switch>
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

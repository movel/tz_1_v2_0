import * as React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import { Authenticated } from './components/common/Authenticated'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './components/Profile/Profile'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { PageNotFound } from './components/PageNotFound/PageNotFound'

import { checkAuthStatus, logout } from './api/auth'

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
              {
                !checkAuthStatus() && (
                  <li>
                    <NavLink
                      to="/login"
                    >
                      LOGIN
                    </NavLink>
                  </li>
                )
              }
              {
                checkAuthStatus() && (
                  <>
                    <li>
                      <NavLink
                        to="/"
                        onClick={logout}
                      >
                        LOGOUT
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/profile">PROFILE</NavLink>
                    </li>
                  </>
                )
              }
            <li>
              <NavLink to="/news">NEWS</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <p>Autor: {props.name} | {props.site}</p>
        
        <div className="page">
          <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/login" exact component={ Login } />
              <Route path="/news" component={ News } />
              <PrivateRoute path="/profile" component={ Profile } /> 
              <Route component={ PageNotFound } /> 
          </Switch>
        </div>
      </div>
    );
}

const RoutedApp = () => {
  return (
      <App name="Nick" site="http://google.com" />
  )
}

export { RoutedApp };

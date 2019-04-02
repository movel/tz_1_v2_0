import * as React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import { Menu } from './components/Menu/Menu'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './components/Profile/Profile'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { PageNotFound } from './components/PageNotFound/PageNotFound'

interface IAppProps {
  name?: string;
  site?: string;
}

const App: React.FC<IAppProps> = props => {

    return (
      <div>
        <Menu />

        <hr />

        {
          !!name ? <p>Autor: {props.name} | {props.site}</p> : null
        }
        
        
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
      <App />
  )
}

export { RoutedApp };

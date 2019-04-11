import * as React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import Menu from './components/Menu/Menu'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './pages/Profile'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { PageNotFound } from './components/PageNotFound/PageNotFound'

interface IAppProps extends RouteComponentProps {
  name?: string;
  site?: string;
}


const App = (props: IAppProps) => {

    return (
      <div>
        <Menu />

        <hr />

        {
          !!props.name ? <p>Autor: {props.name} | {props.site}</p> : null
        }
        
        
        <div className="page">
          <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/home" exact component={ Home } />
              <Route path="/login" exact component={ Login } />
              <Route path="/news" component={ News } />
              <PrivateRoute path="/profile" component={ Profile } /> 
              <Route component={ PageNotFound } /> 
          </Switch>
        </div>
      </div>
    );
}

const RoutedApp = (props: any) => {
  return (
      <App {...props} />
  )
}

export { RoutedApp };

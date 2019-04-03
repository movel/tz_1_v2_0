import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { checkAuthStatus, logout } from '../../api/auth';
import { Button, ButtonToolbar } from 'react-bootstrap'

import './Menu.sass'

const goTo = (route: string, props: any): any => {
  props.history.replace(`/${route}`)
}

const Menu: React.FC<any> = props => {

    return (
      <div className="menu">
        <ButtonToolbar>
          <Button
            className="button__menu"
            variant="primary"
            onClick={() => goTo('home', props)}
          >
            На главную
          </Button>
          <Button
            className="button__menu"
            variant="primary"
            onClick={() => goTo('news', props)}
          >
            Новости
          </Button>
          <Button
            className="button__menu"
            variant="primary"
            onClick={() => goTo('profile', props)}
          >
            Профиль
          </Button>
          {
            !checkAuthStatus() && (
                <Button
                  className="button__menu"
                  variant="primary"
                  onClick={() => goTo('login', props)}
                >
                  Log In
                </Button>
              )
          }
          {
            checkAuthStatus() && (
                <Button
                  className="button__menu"
                  variant="primary"
                  onClick={() => logout()}
                >
                  Log Out
                </Button>
              )
          }
        </ButtonToolbar>
      </div>
    );
  
}

export default withRouter(Menu);
import * as React from 'react'

import { Redirect, RouteComponentProps } from 'react-router-dom'

import { checkAuthStatus } from '../../api/auth'

// про noThrow можете прочитать здесь - https://reach.tech/router/api/Redirect

const Authenticated: React.FC<RouteComponentProps> = ({ children }) => {
  return checkAuthStatus() ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Redirect to='/login' />
  )
}

export { Authenticated }
import * as React from 'react'
import './PageNotFound.sass'

export const PageNotFound = () => {
  return (
    <div className="page__404">
      <h1 className="page__404-title">404</h1>
      <h2>Sorry!</h2>
      <p className="page__404-text">The page you are looking for does not exist or another error occured</p>
    </div>
  )
  
};
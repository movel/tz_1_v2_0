import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

const News: React.FC<RouteComponentProps> = () => {
  return (
    <div className="news">
      <h1>Новости</h1>
      <img src="img/news.jpg" alt="news"/>
    </div>
  )
}

export { News }
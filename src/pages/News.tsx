import * as React from 'react'

import { RouteComponentProps } from 'react-router-dom'
import { getNews } from '../api/news'
import { NewsItem } from '../components/NewsItem/NewsItem' // еще не готов
import { INewsItem } from '../models/news'

const News: React.FC<RouteComponentProps> = () => {
  // useState - это тоже дженерик, он может принимать тип T
  // в нашем случае, тип T - это массив из INewsItem
  // так же, в качестве начального значения, мы указали пустой массив []

  const [news, setNews] = React.useState<INewsItem[]>([]) // <- здесь в скобках указано начальное значение

  React.useEffect(() => {
    getNews()
      .then(res => {
        setNews(res.data)
      })
      .catch(err => {
        // наши правила TSLint запрещают оставлять в коде console.log
        // поэтому, "выключим" линтер для следующей строки

        // tslint:disable-next-line: no-console
        console.warn('Getting news problem', err)
      })
  }, [])

  return (
    <div className="news">
      {news.map(item => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export { News }
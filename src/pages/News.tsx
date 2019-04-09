import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

import { getNews } from '../api/news'
import { NewsItem } from '../components/NewsItem/NewsItem' // еще не готов
import { INewsItem } from '../models/news'
import { fetchNews } from '../store/actions/news';
import { isNull } from 'util';

interface State {
  news: INewsItem[],
}

function init(initialNews: any) {
  return { news: initialNews };
}

type Action = { type: 'fetchNewsStart' } | { type: 'fetchNewsSuccess'; news: any } | { type: 'fetchNewsError' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'fetchNewsStart':
      return { news: []  };
    case 'fetchNewsSuccess':
      return { ...state, news: action.news };
    case 'fetchNewsError':
      return { news: [] };
    default:
      throw new Error();
  }
}

const fetchNewsSuccess = (news: []) => dispatch({
  news: news,
  type: 'fetchNewsSuccess',
});

interface NewsProps {
  initialNews: INewsItem[];
}

function News({ initialNews }: NewsProps) {
  // useState - это тоже дженерик, он может принимать тип T
  // в нашем случае, тип T - это массив из INewsItem
  // так же, в качестве начального значения, мы указали пустой массив []

  const [state, dispatch] = React.useReducer(reducer, {
    news: initialNews
  }); // <- здесь в скобках указано начальное значение

  React.useEffect(() => {
    dispatch({ type: 'fetchNewsStart' })
    getNews()
      .then(res => {
        // () => dispatch({ type: 'fetchNewsSuccess', news: res.data })
        dispatch({ type: 'fetchNewsSuccess', news: [{
          id: 1,
          title: 'Делаем CRUD приложение с помощью React-hooks',
          text: 'В данном конспекте создается простое CRUD-приложение без бэкэнда',
          link:
            'https://maxpfrontend.ru/perevody/delaem-crud-prilozhenie-s-pomoschyu-react-hooks/',
          timestamp: new Date('2019-01-15'),
        }] })
        // setNews(res.data)
        console.log('res.data', res.data)
      })
      .catch(err => {
        // наши правила TSLint запрещают оставлять в коде console.log
        // поэтому, "выключим" линтер для следующей строки
        dispatch({ type: 'fetchNewsError' })
        // tslint:disable-next-line: no-console
        console.warn('Getting news problem', err)
      })
  }, [])  

  console.log('state', state)

  return (
    <div className="news">
      {state.news.map(item => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export { News }
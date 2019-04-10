import * as React from 'react'

import { getNews } from '../api/news'
import { NewsItem } from '../components/NewsItem/NewsItem' // еще не готов
import { INewsItem } from '../models/news'

import { Dispatch } from 'react-hooks-global-state';

import { Action, dispatch, useGlobalState } from '../store/state';


// const fetchNewsSuccess = (news: INewsItem[]) => dispatch({
//   news: news,
//   type: 'setFirstName',
// });
// interface State {
//   news: INewsItem[],
// }

// function init(initialNews: any) {
//   return { news: initialNews };
// }

// type Action = 
//   | { type: 'fetchNewsStart' } 
//   | { type: 'fetchNewsSuccess'; news: any } 
//   | { type: 'fetchNewsError'; error: Error };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'fetchNewsStart':
//       return { news: []  };
//     case 'fetchNewsSuccess':
//       return { ...state, news: action.news };
//     case 'fetchNewsError':
//       return { news: [] };
//     default:
//       throw new Error();
//   }
// }

interface NewsProps {
  initialNews: INewsItem[];
}

function News({ initialNews }: NewsProps) {
  // useState - это тоже дженерик, он может принимать тип T
  // в нашем случае, тип T - это массив из INewsItem
  // так же, в качестве начального значения, мы указали пустой массив []

  // const [state, dispatch] = React.useReducer(reducer, {
  //   news: initialNews
  // }); // <- здесь в скобках указано начальное значение

  React.useEffect(() => {
    // dispatch({ type: 'fetchNewsStart' })
    const dispatchForThunk = dispatch as Dispatch<Action | ((d: Dispatch<Action>) => void)>;
    getNews()
      .then(res => {
        // setNews(res.data)
        dispatchForThunk(async (d: Dispatch<Action>) => {
          try {
            // const news: INewsItem[] = res.data
            d({
              payload: res.data,
              type: 'fetchNewsSuccess',
            });
          } catch (e) {
            // d({
            //   payload: 'ERROR: fetching',
            //   type: 'fetchNewsError',
            // });
            console.warn('Getting news problem', e)
          }
        });
      })
      .catch(err => {
        // наши правила TSLint запрещают оставлять в коде console.log
        // поэтому, "выключим" линтер для следующей строки
        
        // tslint:disable-next-line: no-console
        console.warn('Getting news problem', err)
      })
  }, [])

  const [news] = useGlobalState('news');

  return (
    
      <div className="news">
        {news.arr.map(item => (
          <NewsItem data={item} key={item.id} />
        ))}
      </div>
    
  )
}

export { News }
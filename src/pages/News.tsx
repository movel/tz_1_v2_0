import * as React from 'react'

import { getNews } from '../api/news'
import { NewsItem } from '../components/NewsItem/NewsItem'

import { Dispatch } from 'react-hooks-global-state';

import { dispatch, useGlobalState } from '../store/state/state';
import { Action } from '../store/actions/news'


function News() {

  React.useEffect(() => {
    const dispatchForThunk = dispatch as Dispatch<Action | ((d: Dispatch<Action>) => void)>;
    getNews()
      .then(res => {
        dispatchForThunk(async (d: Dispatch<Action>) => {
          try {
            d({
              payload: res.data,
              type: 'fetchNewsSuccess',
            });
          } catch (e) {
            d({
              type: 'fetchNewsError',
            });
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
        {news.items.map(item => (
          <NewsItem data={item} key={item.id} />
        ))}
      </div>
    
  )
}

export { News }
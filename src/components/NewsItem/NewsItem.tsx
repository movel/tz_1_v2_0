import * as React from 'react'

import { INewsItem } from '../../models/news'

interface INewsItemProps {
  data: INewsItem; // [1]
}

// [2]
const NewsItem: React.FC<INewsItemProps> = ({
  data: { title, text, timestamp, link },
}) => {
  return (
    <article>
      <br />
      <div>
        {
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        }{' '}
        | {timestamp.toLocaleDateString()}
      </div>
      <div>{text}</div>
    </article>
  )
}

export { NewsItem }
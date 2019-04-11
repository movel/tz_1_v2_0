import { INewsItem } from '../../models/news';

export type Action =
  | { type: 'fetchNewsError' }
  | { type: 'fetchNewsSuccess'; payload: INewsItem[] };
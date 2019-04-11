import { INewsItem } from '../../models/news';

export type Action =
  | { type: '' }
  | { type: 'fetchNewsSuccess'; payload: INewsItem[] }
  | { type: 'fetchNewsError'; payload: Error }
import { combineReducers } from 'redux'
import { newsReducer } from './news'

export const reducer = combineReducers({
  news: newsReducer,
});
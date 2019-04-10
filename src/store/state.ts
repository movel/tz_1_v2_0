import { applyMiddleware, combineReducers, compose } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import { createStore } from 'react-hooks-global-state';
import { reduxDevToolsExt } from 'react-hooks-global-state/src/devtools';
import { INewsItem } from '../models/news';

const initialState = {
  counter: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
  news: {
    arr: [{
      id: 0,
      title: 'string',
      text: 'string',
      link: 'string',
      timestamp: new Date(),
    }]
  },
};

export type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setFirstName'; firstName: string }
  | { type: 'setLastName'; lastName: string }
  | { type: 'setAge'; age: number }
  | { type: 'fetchNewsSuccess'; payload: INewsItem[] }
  | { type: 'fetchNewsError'; payload: string };

const counterReducer = (state = initialState.counter, action: Action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
};

const personReducer = (state = initialState.person, action: Action) => {
  switch (action.type) {
    case 'setFirstName': return {
      ...state,
      firstName: action.firstName,
    };
    case 'setLastName': return {
      ...state,
      lastName: action.lastName,
    };
    case 'setAge': return {
      ...state,
      age: action.age,
    };
    default: return state;
  }
};

const newsReducer = (state = initialState.news, action: Action) => {
  switch (action.type) {
    case 'fetchNewsSuccess': return {
      ...state,
      arr: action.payload,
    };
    // case 'fetchNewsError': return {
    //   news: action.payload,
    // };
    default: return state;
  }
};

const reducer = combineReducers({
  counter: counterReducer,
  person: personReducer,
  news: newsReducer,
});

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk, reduxLogger),
    reduxDevToolsExt(),
  ),
);

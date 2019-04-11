import { Action } from '../actions/news'

export const initialState = {
  news: {
    items: [{
      id: 0,
      title: 'string',
      text: 'string',
      link: 'string',
      timestamp: new Date(),
    }]
  },
};

export const newsReducer = (state = initialState.news, action: Action) => {
  switch (action.type) {
    case 'fetchNewsSuccess': return {
      ...state,
      items: action.payload,
    };
    case 'fetchNewsError': return {
      ...state,
    };
    default: return state;
  }
};
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStateProvider } from './store/state'
import './index.css';
import { RoutedApp } from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

// declare global {
//   interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
// }

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     }) : compose;

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
//   ));

const app = (
  // <Provider store={store}>
  <GlobalStateProvider>
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  </GlobalStateProvider>
  // </Provider>
)

ReactDOM.render(app, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

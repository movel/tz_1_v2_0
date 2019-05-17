import * as React from 'react';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import configureStore, { history } from './configureStore'
import { App } from './App'

import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore()

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root') as HTMLElement
  );
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

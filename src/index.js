import React from 'react';
import { render } from 'react-dom';
import App from './App';
import storeFactory from './redux/storeFactory';
import { Provider } from 'react-redux';
import './styles/Main.scss';

const store = storeFactory();

console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
)
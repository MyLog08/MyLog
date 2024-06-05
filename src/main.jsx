import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { GlobalStyle } from './styles/GlobalStyle/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

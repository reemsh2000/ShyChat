import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './components/Search';
import { Provider } from 'react-redux'
import { store } from './state';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Search />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


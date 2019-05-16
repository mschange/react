import React from 'react';
import ReactDOM from 'react-dom';
import './assect/index.less';

// import App from './App';
import Routers from './router';

// 引入redux
import { Provider } from 'react-redux';
// 引入store
import store from './store';


ReactDOM.render(
  <Provider store={ store }>
    <Routers />
  </Provider>,
document.getElementById('root'));

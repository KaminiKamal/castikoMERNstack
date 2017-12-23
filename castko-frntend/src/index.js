import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import reducer from "./reducers";
import { Router, Route, browserHistory } from "react-router";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
<Provider store = {store}>
  <App />
</Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();
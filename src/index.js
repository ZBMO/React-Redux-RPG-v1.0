import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./reducers"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const store=createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();


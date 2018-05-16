import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Home from "./containers/Home/home"
import Section from "./containers/Section/section"
import Sorter from "./components/Sorter/sorter"
import Profile from "./containers/Profile/profile"

import Layout from "./containers/Layout/layout"

const middleware = [promise, thunk]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers)
ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>
  , document.querySelector('.container'));
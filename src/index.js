import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from "./components/posts_index"
import PostsNew from "./components/posts_new"
import PostsShow from "./components/posts_show"

import Index from "./components/index"
import Nav from "./components/nav"
import Page from "./components/page"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/posts/:id" component={PostsShow}/>
          <Route path="/posts" component={PostsIndex}/>
          <Route path="/content" component={Page}/>
          <Route path="/" component={Index}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

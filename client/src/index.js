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
import Home from "./containers/Home/home"
import Section from "./containers/Section/section"
import Sorter from "./components/Sorter/sorter"
import Profile from "./containers/Profile/profile"

import Index from "./components/index"
import Navigation from "./containers/Navigation/navigation"
import Page from "./containers/Page/page"


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Navigation}/>
        </Switch>
        <Switch>
          {/*<Route path="/posts/new" component={PostsNew}/>*/}
          {/*<Route path="/posts/:id" component={PostsShow}/>*/}
          {/*<Route path="/posts" component={PostsIndex}/>*/}
          <Route path="/profile" component={Profile}/>
          <Route path="/:section/:page" component={Sorter} />
          <Route path="/:section" component={Section} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

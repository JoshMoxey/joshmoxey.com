import React, {Component} from "react";
import {connect} from "react-redux"
import {createSelector} from 'reselect'

import CSSModules from "react-css-modules"
import styles from "./layout.css"

import {Route, BrowserRouter, Switch} from "react-router-dom"

import Section from "../Section/section"
import Sorter from "../../components/Sorter/sorter"
import Error from "../../components/Error/error"
import Profile from "../Profile/profile"
import Home from "../Home/home"

import Navigation from "../Navigation/navigation"

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div styleName={`main-switch ${this.props.sidebar.open ? "sidebar-open" : "sidebar-closed"}`}>
          <Switch>
            <Route path="/" component={Navigation}/>
          </Switch>
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/error" component={Error} exact/>
            <Route path="/:section/:page" component={Sorter}/>
            <Route path="/:section" component={Section}/>
            <Route path="/" component={Home} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({sidebar}, ownProps) {
  return {
    sidebar: sidebar,
  };
}

const ComponentWithCSS = CSSModules(Layout, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps)(ComponentWithCSS)
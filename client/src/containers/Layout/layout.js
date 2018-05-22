import React, {Component} from "react";
import {connect} from "react-redux"
import {createSelector} from 'reselect'

import CSSModules from "react-css-modules"
import styles from "./layout.css"
import {Route, BrowserRouter, Switch} from "react-router-dom"
import ReactGA from "react-ga"
import ScrollMemory from 'react-router-scroll-memory';

import Section from "../Section/section"
import Sorter from "../../components/Sorter/sorter"
import Error from "../Status/status"
import Profile from "../Profile/profile"
import Home from "../Home/home"
import ImagePopUp from "../../components/ImagePopUp/image-pop-up"
import Navigation from "../Navigation/navigation"
import Analytics from "../../global/analytics"
import {production} from "../../global/global"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePopUpActive: false,
      imagePopUpSrc: "",
      sidebar: {
        open: false
      }
    }
    if (production()) ReactGA.initialize('UA-86454336-2')
  }

  togglePopUp = (e) => {
    //if it's closed, check if it's clicking on img, then open it
    if (!this.state.imagePopUpActive && e.target.tagName === "IMG") {
      this.setState({
        imagePopUpActive: true,
        imagePopUpSrc: e.target.src
      })
    }
    //if it's open, check if it's clicking on non img, then close it
    if (this.state.imagePopUpActive && e.target.tagName !== "IMG") {
      this.setState({imagePopUpActive: false})
    }
  }

  toggleSidebar = () => {
    this.setState({
      sidebar: {open: !this.state.sidebar.open}
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div styleName={`main-switch ${this.state.sidebar.open ? "sidebar-open" : "sidebar-closed"}`}>
          <ScrollMemory/>
          <ImagePopUp
            active={this.state.imagePopUpActive}
            src={this.state.imagePopUpSrc}
            togglePopUp={this.togglePopUp.bind(this)}
          />
          <Route path="/" render={(props) =>
            <Navigation
              {...props}
              toggleSidebar={this.toggleSidebar}
              sidebar={this.state.sidebar}/>}/>
          {production() ? <Route path="/" component={Analytics}/> : ""}
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/profile" render={() =>
              <Profile togglePopUp={this.togglePopUp}/>}/>
            <Route path="/:section/:page" render={(props) =>
              <Sorter active {...props} togglePopUp={this.togglePopUp}/>}/>
            <Route path="/:section" component={Section}/>
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
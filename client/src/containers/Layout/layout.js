import React, {Component} from "react";
import {connect} from "react-redux"
import {createSelector} from 'reselect'

import CSSModules from "react-css-modules"
import styles from "./layout.css"

import {Route, BrowserRouter, Switch} from "react-router-dom"

import Section from "../Section/section"
import Sorter from "../../components/Sorter/sorter"
import Error from "../Status/status"
import Profile from "../Profile/profile"
import Home from "../Home/home"
import ImagePopUp from "../../components/ImagePopUp/image-pop-up"
import ScrollMemory from 'react-router-scroll-memory';

import Navigation from "../Navigation/navigation"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePopUpActive: false,
      imagePopUpSrc: ""
    }
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

  render() {
    return (
      <BrowserRouter>
        <div styleName={`main-switch ${this.props.sidebar.open ? "sidebar-open" : "sidebar-closed"}`}>
          <ScrollMemory/>
          <ImagePopUp
            active={this.state.imagePopUpActive}
            src={this.state.imagePopUpSrc}
            togglePopUp={this.togglePopUp.bind(this)}
          />
          <Switch>
            <Route path="/" component={Navigation}/>
          </Switch>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/profile" render={() => <Profile togglePopUp={this.togglePopUp} />} />
            <Route path="/:section/:page" render={(props) => <Sorter active {...props} togglePopUp={this.togglePopUp}/>}/>
            <Route path="/:section" component={Section}/>
            <Route path="/" render={(props) => <Status status={404}/>}/>
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
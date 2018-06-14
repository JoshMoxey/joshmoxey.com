import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./sidebar.css"

import {NavLink, Link} from "react-router-dom"
import Svg from "../../components/Svg/svg"
import {imgPathify} from "../../global/global";

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false
  }

  render() {

    if (!this.props.links) return '';

    const detail = function (detail, i, main = false) {
      //todo
      //going into child components too which is a little annoying
      //I only want home to be "exact"
      //if first round, do the exact for the first element

      let exact = i === 0 && main

      return (
        <div key={i}>
          <NavLink
            exact={exact}
            styleName="detail"
            key={i}
            to={detail.url}
            activeStyle={{
              color: "#FFF",
              fontWeight: 500
            }}
            onClick={this.props.toggleSidebar.bind(this)}
          >
            <div styleName="icon">
              <Svg icon={detail.icon}/>
            </div>
            <div styleName="title">{detail.title}</div>
          </NavLink>
          {looper(detail.children, false)}
        </div>
      )
    }.bind(this)

    const looper = function (arr, main = false) {
      //loop through the array
      //if children.length
      //call the function but pass in children as the value
      if (arr.length) {
        return (
          <div styleName="container">
            {arr.map((d, i) => detail(d, i, main))}
          </div>
        )
      }
    }

    return (
      <div styleName={`sidebar ${this.props.sidebar.open ? "open" : ""}`}>
        <div styleName="header-1">
          <Link to={"/"}>
            <div styleName="img-container">
              <img src={imgPathify("josh-moxey.png")}/>
              {/*<div styleName="img"></div>*/}
            </div>
          </Link>
          <Link to={"/"}>
            <h2>Josh Moxey</h2>
          </Link>
        </div>
        <div styleName="header-2">
          <div styleName="img"></div>
          <h2>Josh Moxey</h2>
        </div>
        {looper(this.props.links, true)}
      </div>
    )
  }
}

export default CSSModules(Sidebar, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
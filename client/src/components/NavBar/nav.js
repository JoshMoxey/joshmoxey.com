import React from "react";
import {Link, NavLink} from "react-router-dom"
import CSSModules from 'react-css-modules';
import styles from './nav.css';

import Svg from "../../components/Svg/svg"

const Nav = (props) => {
  //go back function
  if (!props.links) return '';

  const icons = props.links.map(function(icon, i) {
    if (icon.priority === 1) {
      return (
        <NavLink
          exact
          key={i}
          to={icon.href}
          activeStyle={{
            // color: "royalblue"
            color: "#444"
          }}
        >
          <div styleName="icon">
            <Svg icon={icon.icon}/>
          </div>
          <span>{icon.title}</span>
        </NavLink>
      )
    }
  })

  return (
    <div styleName="nav">
      <div styleName="top">
        <div styleName="left">
          <a styleName="back">
            <Svg icon="back arrow1"/>
          </a>
          <div styleName="title">{props.sidebar.open ? "Open" : "Closed"}</div>
        </div>
        <div styleName="right">
          {icons}
          <a onClick={props.toggleSidebar.bind(this)}>
            <div styleName="icon">
              <Svg icon="hamburger2" viewBox="0 0 38 32"/>
            </div>
          </a>
        </div>
      </div>
      <div styleName="bottom">
        {icons}
      </div>
    </div>
  )
}

export default CSSModules(Nav, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
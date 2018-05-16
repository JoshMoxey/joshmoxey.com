import React from "react";
import {Link, NavLink} from "react-router-dom"
import CSSModules from 'react-css-modules';
import styles from './nav.css';

import Svg from "../../components/Svg/svg"

const Nav = (props) => {
  //go back function
  if (!props.links) return '';

  const NavIconLink = (props) =>
    <NavLink
      exact={props.exact}
      key={props.i}
      to={props.to}
      activeStyle={props.activeStyle}
    >
      <div styleName="icon">
        <Svg icon={props.icon}/>
      </div>
      <span>{props.title}</span>
    </NavLink>

  const mainIcons = props.links.map(function (icon, i) {
    if (icon.priority === 1) {
      return (
        <NavLink
          exact
          key={i}
          to={icon.href}
          activeStyle={{
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

  const icons = props.links.map(function (icon, i) {
    return (
      <NavLink
        exact={i === 0}
        key={i}
        to={icon.href}
        activeStyle={{
          color: "#FFF"
        }}>
        <div styleName="icon">
          <Svg icon={icon.icon}/>
        </div>
        <span>{icon.title}</span>
      </NavLink>
    )
  })

  //   <NavIconLink
  // key={i}
  // to={icon.href}
  // activeStyle={{color: "#FFF"}}
  // icon={icon.icon}
  // title={icon.title}
  // />


  console.log("passed")

  return (
    <div styleName="nav">
      <div styleName="top">
        <div styleName="left">
          {/*<a styleName="back">*/}
          {/*<Svg icon="back arrow1"/>*/}
          {/*</a>*/}
          <div styleName="title">{props.title}</div>
        </div>
        <div styleName="right">
          {/*{mainIcons}*/}
          <a onClick={props.toggleSidebar.bind(this)}>
            <div styleName="icon">
              <Svg icon="hamburger2" viewBox="0 0 38 32"/>
            </div>
          </a>
        </div>
      </div>
      <div styleName="side">
        <a
          styleName="more"
          onClick={props.toggleSidebar.bind(this)}>
          <div styleName="icon">
            <Svg icon="hamburger2" viewBox="0 0 38 32"/>
          </div>
        </a>
        <div styleName="scroll">
        {icons}
        </div>
      </div>
      <div styleName="bottom">
        {/*{mainIcons}*/}
      </div>
    </div>
  )
}

export default CSSModules(Nav, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
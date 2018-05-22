import React, {Component} from "react";
import CSSModules from "react-css-modules"
import styles from "./overlay.css"
import {Parallax, Background} from 'react-parallax';
import {
  overlayStyler
} from "../../global/global";

const Overlay = (props) => {
  if (props.overlay) {
    return <div styleName="overlay" style={overlayStyler(props.overlay)}></div>
  }
  return ""
}

export default Overlay
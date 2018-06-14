import React from "react";
import {idify} from "../../global/global";
import CSSModules from "react-css-modules"
import styles from "./smart-img.css"

const SmartImg = (props) => {
  const imgContainer = {
    height: props.height || "100%",
    width: props.width || "100%"
  }

  const backdrop = {
    backgroundColor: props.color || "#999"
  }

  return (
    <div styleName="img-container" style={imgContainer}>
      <img src={props.src}/>
      <div styleName="img-backdrop" style={backdrop}></div>
    </div>
  )
}

export default CSSModules(SmartImg, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
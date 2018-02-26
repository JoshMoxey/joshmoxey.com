import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./image-pop-up.css"
import LinkPlus from "../LinkPlus/link-plus"

//todo
//add caption if there is one
//make it url integrated, so that if you click on an image it changes the url like trello or fb, for easy linking
//buttons between photos if focused
//add svg for x button

const ImagePopUp = (props) => {
  return (
    <div styleName={`image-popup ${props.active ? "active" : ""}`} onClick={props.togglePopUp}>
      <div styleName="x">
        <div></div>
        {/*put svg here*/}
      </div>
      <div styleName="img-container">
        <img src={props.src}/>
      </div>
    </div>
  )
}

export default CSSModules(ImagePopUp, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
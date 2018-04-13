import React from "react";
import CSSModules from "react-css-modules"
import styles from "./banner.css"
import {Parallax, Background} from 'react-parallax';
import {backgroundStyling} from "../../global/global";

const Banner = (props) => {
  //todo
  //add dynamic height

  const height = props.height || ""
  return (
    <div styleName={`hero-banner ${props.banner.active ? "has-banner" : "no-banner"}`}>
      <Parallax strength={350}>
        <div
          styleName="sizing"
          style={{
            minHeight: `${height}px`
          }}
        >
          {props.children}
        </div>
        <Background>
          <div
            styleName="banner"
            style={backgroundStyling(props.banner)}
          >
          </div>
        </Background>
      </Parallax>
    </div>
  )
}

export default CSSModules(Banner, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
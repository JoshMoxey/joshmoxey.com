import React from "react";
import CSSModules from "react-css-modules"
import styles from "./banner.css"
import {Parallax, Background} from 'react-parallax';

const Banner = (props) => {
  //if there's no banner, check for color
  //banner: boolean
  //color: boolean
  //gradient: boolean
  //value: src, color(s)
  //priority: banner, gradient, color

  //add dynamic height

  const bannerClass = props.banner.active ? 'has-banner' : 'no-banner';
  const image = props.banner.img || false
  const gradient = props.banner.gradient || false
  const color = props.banner.color || false

  console.log(styles)

  const styling = {
    backgroundColor: "lightgrey",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }

  if (props.banner.active) {
    if (image) {
      styling.backgroundImage = `url("${image}")`
    } else if (gradient) {
      styling.background = `linear-gradient(${gradient})`
    } else if (color) {
      styling.backgroundColor = color
    } else {
      throw new Error("Requires an image, gradient or color to be passed to the banner")
    }
  }
  return (
    <div styleName={`hero-banner ${props.banner.active ? "has-banner" : "no-banner"}`}>
      <Parallax
        bgImage={'http://fullhdwall.com/wp-content/uploads/2016/08/Widescreen-Space.jpg'}
        bgImageAlt="Insert banner alt here"
        strength={350}
      >
        <Background>
          <img />
          {/*position absolute w/ left & right -3px */}
        </Background>
        <div styleName="height"></div>
      </Parallax>
    </div>
  )
  return (
    <Parallax
      strength={200}
      blur={10}
    >
      <div
        styleName={`hero-banner ${props.banner.active ? "has-banner" : "no-banner"}`}
        style={styling}>
        {props.children}
      </div>
    </Parallax>
  )
}

export default CSSModules(Banner, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
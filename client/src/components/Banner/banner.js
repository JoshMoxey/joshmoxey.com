import React from "react";
import CSSModules from "react-css-modules"
import styles from "../PageHero/page-hero.css"

const Banner = (props) => {
  //if there's no banner, check for color
  //banner: boolean
  //color: boolean
  //gradient: boolean
  //value: src, color(s)
  //priority: banner, gradient, color
  // throw new Error("What's in the fucking box")

  //add dynamic height

  const bannerClass = props.banner.hasBanner ? 'has-banner' : 'no-banner';
  const image = props.banner.img || false
  const gradient = props.banner.gradient || false
  const color = props.banner.color || false
  
  const styling = {
    backgroundColor: "lightgrey",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  
  if (props.banner.hasBanner) {
    if (image) {
      styling.backgroundImage = `url("${image}")`
    } else if (gradient) {
      styling.background = `linear-gradient(${gradient})`
    } else if (color) {
      styling.backgroundColor = color
    } else {
      throw new Error ("Requires an image, gradient or color to be passed to the banner")
    }
  }
  
  return (
    <div styleName={'hero ' + bannerClass}>
      {props.banner.hasBanner ?
        <div styleName="hero-banner"
             style={styling}>
          {props.children}
        </div>
        : ''}
    </div>
  )
}

export default CSSModules(Banner, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
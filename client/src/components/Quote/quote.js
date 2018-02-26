import React from "react"
import CSSModules from "react-css-modules";
import styles from "./quote.css"

const Quote = (props) => {
  return (
    <section styleName="quote">
      <div styleName="line"></div>
      <div styleName="raw">I'm sick of the fronting and the bullshit in 2017, and I just want to be authentically me instead of an artificial Instagram version.</div>
    </section>
  )
}

export default CSSModules(Quote, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
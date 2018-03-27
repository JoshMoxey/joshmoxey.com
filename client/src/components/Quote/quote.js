import React from "react"
import CSSModules from "react-css-modules";
import styles from "./quote.css"

const Quote = (props) => {
  if (!props || !props.text || !props.active) return ""

  return (
    <section styleName="quote">
      <div styleName="line"></div>
      <div styleName="raw">
        {props.text.map((text, i) => <span key={i}>{text}<br/></span>)}
      </div>
    </section>
  )
}

export default CSSModules(Quote, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
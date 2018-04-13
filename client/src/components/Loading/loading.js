import React from "react"
import CSSModules from "react-css-modules"
import styles from "./loading.css"

const Loading = (props) => {

  return (
    <div styleName="loading">
      <div styleName="spinner">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default CSSModules(Loading, styles, {})
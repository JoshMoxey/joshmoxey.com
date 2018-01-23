import React from "react"
import CSSModules from "react-css-modules"
import styles from "../../style/details.css"

const Details = (props) => {
  props.data = [
    {
      name: "Date created",
      value: "December 30th, 2017"
    },
    {
      name: "Last updated",
      value: "January 12th, 7:30pm"
    },
    {
      name: "Category",
      value: "The Josh Moxey Show"
    },
  ]

  const details = props.data.map((detail) =>
    <div styleName="detail">
      <div styleName="name">{detail.name}</div>
      <div styleName="value">{detail.value}</div>
    </div>
  )

  return (
    <div>
      {details}
    </div>
  )
}

export default CSSModules(Details, styles, {})
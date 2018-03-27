import React from "react"
import CSSModules from "react-css-modules"
import styles from "./details.css"

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

  const details = props.data.map((detail, i) =>
    <div styleName="detail" key={i}>
      <div styleName="name">{detail.name}</div>
      <div styleName="value">{detail.value}</div>
    </div>
  )

  let title = ""
  switch (props.title) {
    case false:
      break;
    case undefined:
      title = <h2>Details</h2>
      break;
    default:
      title = <h2>{props.title}</h2>
  }

  return (
    <section>
      {title}
      <div styleName="details">
        {details}
      </div>
    </section>
  )
}

export default CSSModules(Details, styles, {})
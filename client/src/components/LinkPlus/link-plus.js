import React from "react"
import {Link} from "react-router-dom"

const LinkPlus = props => {
  const href = props.href || ""
  const style = props.style || {}

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        style={style}>
      {props.children}
    </a>)
  } else {
    return (
      <Link
        to={href}
        style={style}>
      {props.children}
    </Link>)
  }
}

export default LinkPlus;
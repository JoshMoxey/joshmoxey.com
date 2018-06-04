import React from "react"
import {Link} from "react-router-dom"

const LinkPlus = props => {
  const url = props.url
  const style = props.style || {}
  const omit = props.omit || props.ignore

  if (!url || omit) return ""

  if (url.startsWith("http") || url.startsWith("www") || props.external) {
    return (
      <a
        href={url}
        target="_blank"
        style={style}
      >
        {props.children}
      </a>
    )
  } else {
    return (
      <Link
        to={url}
        style={style}>
        {props.children}
      </Link>
    )
  }
}

export default LinkPlus;
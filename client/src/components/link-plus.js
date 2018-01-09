import React from "react"
import {Link} from "react-router-dom"

const LinkPlus = props => {
  const href = props.href || ""

  if (props.external) {
    return (<a href={href} target="_blank">
      {props.children}
    </a>)
  } else {
    return (<Link to={href}>
      {props.children}
    </Link>)
  }
}

export default LinkPlus;
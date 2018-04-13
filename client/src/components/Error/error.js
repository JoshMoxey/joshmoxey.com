import React from "react"
import CSSModules from "react-css-modules"
import styles from "./error.css"
import Helmet from "react-helmet"
import {titlify} from "../../global/global";

const Error = (props) => {
  let title, message

  switch(props.status) {
    case 404:
      title = "Error 404"
      message = "The page you requested cannot be found."
      break;
    case 500:
      title = "Error 500"
      message = "Sorry, I created a bug. My fault. Reach out to me so on my <Link to='/socials'>socials</Link> so I can fix it."
      break;
  }

  title = props.title || title || "Title"
  message = props.title || message || "Message"

  return (
    <div styleName="body">
      <Helmet>
        <title>{titlify(title)}</title>
      </Helmet>
      <section styleName="error">
        <h2>{title}</h2>
        <p>{message}</p>
      </section>
    </div>
  )
}

export default CSSModules(Error, styles, {})
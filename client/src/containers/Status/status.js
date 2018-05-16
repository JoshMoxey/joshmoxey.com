import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./status.css"
import Helmet from "react-helmet"
import {titlify} from "../../global/global";
import {updateTitle} from "../../actions/index";

class Status extends Component {
  constructor(props) {
    super(props)
  }

  titleSwitch = (status) => {
    switch (status) {
    case 404:
      return "Page Not Found"
      break;
    case 500:
      return "Internal Server Error"
      break;
    default:
      return "(???)"
    }
  }

  componentDidMount() {
    this.props.updateTitle(this.titleSwitch(this.props.status))
  }

  componentDidUpdate() {
    this.props.updateTitle(this.titleSwitch(this.props.status))
  }

  render() {
    let title, message

    switch (this.props.status) {
      case 404:
        title = "Error 404"
        message = "The page you requested doesn't exist in this time/space reality."
        break;
      case 500:
        title = "Error 500"
        message = "I created a bug. My fault. Reach out to me so on my <Link to='/socials'>socials</Link> so I can fix it."
        break;
      default:
        title = "Error (???)"
        message = "Cause of the error: unknown. (yikes)"
    }

    title = this.props.title || title || "Title"
    message = this.props.title || message || "Message"

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
}

const ComponentWithCSS = CSSModules(Status, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(null, {updateTitle})(ComponentWithCSS)
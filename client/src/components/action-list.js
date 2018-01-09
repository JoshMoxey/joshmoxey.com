import React, {Component} from "react"
import Svg from './svg'
import {Link} from "react-router-dom"
import CSSModules from "react-css-modules"
import styles from "../../style/action-list.css"
import LinkPlus from "./link-plus"

class ActionList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.links) return

    const actions = this.props.links.links.map((item, i) =>
      <li key={i}>
        <LinkPlus external={item.external} href={item.href}>
          <Svg icon={item.name}/>
          <span styleName="text">
            {item.name}
          </span>
        </LinkPlus>
      </li>
    )

    const isOpen = this.props.actionListOpen ? "open" : "";

    return (this.props.static || this.props.static === "true") ?
      <section styleName="action-list-static">
        <h2>{this.props.links.shortText}</h2>
        <ul className="ul-unstyled" styleName="">
          {actions}
        </ul>
      </section>
      : //else if pop up
      <div styleName={`action-list-pop-up ${isOpen}`}
           onClick={this.props.onActionClick.bind(this)}>
        <div styleName="background"></div>
        <ul className="ul-unstyled" styleName="">
          {actions}
        </ul>
      </div>
  }
}

export default CSSModules(ActionList, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
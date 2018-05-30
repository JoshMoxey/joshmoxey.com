import React, {Component} from "react"
import Svg from '../Svg/svg'
import {Link} from "react-router-dom"
import CSSModules from "react-css-modules"
import styles from "./action-list.css"
import LinkPlus from "../LinkPlus/link-plus"
import {linkTitles} from "../../global/global";

class ActionList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.links) return

    let actions = this.props.links.links.map((item, i) =>
      <li key={i} styleName={`${this.props.main ? "main" : "" }`}>
        <LinkPlus href={item.href}>
          <Svg icon={item.id}/>
          <span styleName="text">
            {linkTitles[item.id]}
          </span>
        </LinkPlus>
      </li>
    )

    const actionListOpen = this.props.actionListOpen || false
    const actionListActive = this.props.actionListActive || false
    const id = this.props.id || false

    const isOpen = actionListOpen
    && actionListActive == id
      ? "open" : ""

    //base speed of x + (y milliseconds for every link there is)
    //6 = .75s
    //3.5 + .5

    const transitionDuration = .48 + (this.props.links.links.length * .043) + "s"

    return (
      this.props.static || this.props.static === "true" ?
        <section styleName="action-list-static">
          <h2>{this.props.links.title}</h2>
          <ul className="unstyled" styleName="">
            {actions}
          </ul>
        </section>
        : //else if pop up
        <div styleName={`action-list-pop-up ${isOpen}`}>
          <div styleName="background"
               onClick={this.props.onActionClick.bind(this)}
               style={{transitionDuration}}
          ></div>
          <ul className="ul-unstyled" style={{transitionDuration: transitionDuration}}>
            {actions}
          </ul>
        </div>
    )
  }
}

export default CSSModules(ActionList, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
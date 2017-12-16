import React, {Component} from "react"
import Svg from './svg'
import {Link} from "react-router-dom"
import CSSModules from "react-css-modules"
import styles from "../../style/page-cta.css"

class ActionList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const arr = this.props.links.map((item, i) =>
      <li key={i}>
        <a href={item.href} target="_blank">
          <Svg
            icon={item.name}
          />
          <span styleName="text">
            {item.name}
          </span>
        </a>
      </li>
    )
    
    const isOpen = this.props.actionListOpen ? "open" : "";
    
    return (
      <div styleName={`action-list ${isOpen}`}
           onClick={this.props.onActionClick}>
        <div styleName="background"></div>
        <ul className="ul-unstyled" styleName="">
          {arr}
        </ul>
      </div>
    )
  }
}

export default CSSModules(ActionList, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
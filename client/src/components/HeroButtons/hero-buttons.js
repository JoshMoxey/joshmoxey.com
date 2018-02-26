import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./hero-buttons.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import ActionList from "../ActionList/action-list"
import LinkPlus from "../LinkPlus/link-plus";

class HeroButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionListOpen: false,
      actionListActive: 0
    }
    this.onActionClick = this.onActionClick.bind(this)
  }

  onActionClick(e) {
    console.log("action click")
    let id = e.target.name || 0
    if (!id == 0 && !id == 1 && !id == 2) {
      id = 0
    }

    this.setState({
      actionListOpen: !this.state.actionListOpen,
      actionListActive: id //id associated with list
    })
  }

  render() {
    const buttons = this.props.links.map(function (button, i) {
      if (button.links.length === 1) {
        return (
          <LinkPlus
            key={i}
            external={button.links[0].external}
            href={button.links[0].href}
          >
            {button.shortText}
          </LinkPlus>
        )
      }
      return (
        <button
          name={i}
          key={i}
          onClick={this.onActionClick.bind(this)}
        >
          {button.shortText}
        </button>
      )
      //sort in priority order
      //if their priority is 1
      //if 1-2, make color x (ie. popping red)
      //if 2-10, make color y (ie. ghost)
      //external, link plus
      //if (length > 1), actionList button
      //else, LinkPlus
      //if external = true, a
      //else Link tag

    }, this)

    console.log(this.props.links)
    const actionLists = this.props.links.map((list, i) =>
      <ActionList
        key={i}
        onActionClick={this.onActionClick}
        links={list}
        actionListOpen={this.state.actionListOpen}
        actionListActive={this.state.actionListActive}
        id={i}
      />
    )

    return (
      <div>
        {actionLists}
        <div styleName="button-container">{buttons}</div>
      </div>
    )
  }
}

export default CSSModules(HeroButtons, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
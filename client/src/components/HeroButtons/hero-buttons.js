import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./hero-buttons.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import ActionList from "../ActionList/action-list"
import LinkPlus from "../LinkPlus/link-plus";
import Svg from "../Svg/svg"

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
    let id = e.target.name || 0

    this.setState({
      actionListOpen: !this.state.actionListOpen,
      actionListActive: id //id associated with list
    })
  }

  render() {
    const white = this.props.white ? "white" : ""
    const buttons = this.props.links.map(function (button, i) {
      const title = button.title.toLowerCase()
      if (title === "share" || title === "more") {
        return (
          <button
            key={i}
            onClick={this.onActionClick.bind(this)}
            styleName={`icon ${title}`}
          >
            <Svg icon="ios share"></Svg>
          </button>
        )
      }
      if (button.links.length === 1) {
        return (
          <LinkPlus
            key={i}
            href={button.links[0].href}>
            {button.title}
          </LinkPlus>
        )
      }
      return (
        <button
          key={i}
          name={i}
          onClick={this.onActionClick.bind(this)}>
          {button.title}
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
      <div styleName="hero-buttons">
        {actionLists}
        <div styleName={`button-container ${white}`}>{buttons}</div>
      </div>
    )
  }
}

export default CSSModules(HeroButtons, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
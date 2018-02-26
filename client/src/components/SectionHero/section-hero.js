import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./section-hero.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import ActionList from "../ActionList/action-list"
import PageHeroDetails from "../PageHeroDetails/page-hero-details"

class SectionHero extends Component {
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
    console.log(this.state)
    const imgSrc = this.props.header.icon;
    const title = this.props.header.title
    const titleClass = (titleText) => {
      if (titleText.length > 60) {
        return 'long'
      } else if (titleText.length > 40) {
        return 'medium'
      } else {
        return 'short'
      }
    }

    // if (!this.props.links) return ''
    // const arr = this.props.links.map((item, i) => <div></div>)

    // console.log(this.state.actionListOpen && this.state.actionListActive)
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

    const buttons = this.props.links.map(function (button, i) {
      //if their priority is 1
      //if 1, make color x (ie. popping red)
      //if 2, make color y (ie. ghost)
      return (
        <button
          name={i}
          key={i}
          onClick={this.onActionClick.bind(this)}
        >
          {button.shortText}
        </button>
      )
    }, this)

    this.props.image = "https://fm.cnc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg"
    // setState of active
    // if state.open === true && this.section === variable[i], apply class of open.

    const backgroundColor = "#666"
    const gradient = "linear-gradient(-45deg, #444, #888)"
    const backgroundImage = this.props.image ? `url(${this.props.image}), ${gradient}` : gradient
    const background = {
      backgroundColor,
      backgroundImage
    }

    return (
      <div styleName="hero">
        <div styleName="background" style={background}>
        <div styleName="title-container">
          <h1 styleName="">{title}</h1>
          <h2>Most recent</h2>
          <div styleName="button-container">
            {buttons}
          </div>
        </div>
        </div>
        {actionLists}
      </div>
    )
  }
}

export default CSSModules(SectionHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
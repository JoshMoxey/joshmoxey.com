import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "../../style/page-hero.css";
import {Link} from "react-router-dom";
import Banner from "./banner"
import ActionList from "./action-list"

class PageHero extends Component {
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

    console.log(this.state)
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
    
    let a  = {
      target: {
        name: 0
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

    // const actionLists = <div>yo</div>

    const category = this.props.header.category.map(function (cat, i) {
      if (i === 0) {
        return (<Link key={i} to={cat.href}>{cat.name}</Link>)
      } else {
        return (<span key={i}>, <Link to={cat.href}>{cat.name}</Link></span>)
      }
    })

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

    // setState of active
    // if state.open === true && this.section === variable[i], apply class of open.

    return (
      <div styleName="hero">
        {actionLists}
        <Banner banner={this.props.header.banner} styles={styles}/>
        <div styleName="heading">
          <div styleName="logo-container">
            <div styleName="img-sim"></div>
            <img src={imgSrc}/>
          </div>
          <div styleName="right">
            <h6>{category}</h6>
            <h1 styleName={titleClass(title)}>{title}</h1>
            <div styleName="button-container">
              {buttons}
            </div>
          </div>
        </div>
        <div styleName="details">
          <div styleName="detail detail-left">
            <div styleName="name">Number</div>
            <div styleName="value">Episode 0</div>
          </div>
          <div styleName="detail detail-middle">
            <div styleName="name"></div>
            <div styleName="value"></div>
          </div>
          <div styleName="detail detail-right">
            <div styleName="name">Date</div>
            <div styleName="value">October 14th, 2017</div>
            {/*<div styleName="value">10/26/17</div>*/}
          </div>
          {/*<div styleName="detail-1">*/}
            {/*<div styleName="name"></div>*/}
            {/*<div styleName="value"></div>*/}
          {/*</div>*/}
        </div>
        <div styleName="divider">
          <div></div>
        </div>
      </div>
    )
  }
}

export default CSSModules(PageHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
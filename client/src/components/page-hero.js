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
  }
  
  onActionClick(e) {
    this.setState({
      actionListOpen: !this.state.actionListOpen,
      actionListActive: e.target.name //id associated with list
    })
  }

  render() {
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
    
    const actionLists = this.props.links.map((list, i) =>
      <ActionList
        key={i}
        class={`action-list-${i}`}
        onActionClick={this.toggleActionList}
        // actionListOpen={this.state.actionListOpen}
        links={list.links}
      />
    )
    
    const category = this.props.header.category.map(function (cat, i) {
      if (i === 0) {
        return (<Link key={i} to={cat.href}>{cat.name}</Link>)
      } else {
        return (<span key={i}>, <Link to={cat.href}>{cat.name}</Link></span>)
      }
    })
    
    const buttons = this.props.links.map(function(button, i) {
      //if their priority is 1
      
      return <button
        name={i}
        key={i}
        // onClick={scope.test.bind(scope)}
        onClick={this.onActionClick.bind(this)}
      >{button.shortText}
      </button>
    }, this)
    
    return (
      <div styleName="hero">
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
        <div styleName="divider">
          <div></div>
        </div>
      </div>
    )
  }
}

export default CSSModules(PageHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
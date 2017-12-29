import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "../../style/page-hero.css";
import {Link} from "react-router-dom";
import Banner from "./banner"

class PageHero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionListOpen: false,
      actionListSource: []
    }
  }
  
  onActionClick(e) {
    let num = e.target.name - 1
    
    if (num == 1) {
      state = this.props.page.content.listenLinks
    } else if (num == 2) {
      state = this.props.page.content.shareLinks
    }
    
    this.setState({
      actionListOpen: !this.state.actionListOpen,
      actionListSource: state
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
    
    // const actionLists = this.props.links.map((list, i) =>
    //   <ActionList
    //     onActionClick={this.toggleActionList}
    //     // actionListOpen={this.state.actionListOpen}
    //     // links={this.state.actionListSource}
    //   />
    // )
    console.log(this.props.header)
    
    const category = this.props.header.category.map(function (cat, i) {
      if (i === 0) {
        return (<Link key={i} to={cat.href}>{cat.name}</Link>)
      } else {
        return (<span key={i}>, <Link to={cat.href}>{cat.name}</Link></span>)
      }
    })
    
    const buttons = this.props.links.map(function() {
      //if
      <button 
        name="2"
        // onClick={this.onActionClick.bind(this)}
      >
        
      </button>
    })
    
    console.log(styles)
    
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
              {/*<button id="1" name="1" onClick={this.props.onActionClick.bind(this)}>*/}
              <button name="1"
                      onClick={this.onActionClick.bind(this)}>
                Visit
                {/*insert text here for CTA text from header*/}
              </button>
              <button name="2"
                      onClick={this.onActionClick.bind(this)}>
                Share
              </button>
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
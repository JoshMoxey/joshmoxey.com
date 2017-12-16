import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "../../style/page-hero.css";
import { Link } from "react-router-dom";

class PageHero extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const imgSrc = this.props.data.icon;
    const title = this.props.data.title
    const titleClass = (titleText) => {
      if (titleText.length > 60) {
        return 'long'
      } else if (titleText.length > 40) {
        return 'medium'
      } else {
        return 'short'
      }
    }
    
    const category = this.props.data.category.map(function (cat,i) {
      if (i === 0) {
        return (<Link key={i} to={cat.href}>{cat.name}</Link>)
      } else {
        return (<span key={i}>, <Link to={cat.href}>{cat.name}</Link></span>)
      }
    })
  
    // this.props.data.heroBanner = true

    
    return (
      <div styleName={'hero ' +(this.props.data.heroBanner ? 'has-banner' : 'no-banner')}>
        {this.props.data.heroBanner ?
          <div styleName="hero-banner"
               style={{backgroundImage: this.props.data.heroBanner.src}}
          ></div> : ''}
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
                      onClick={this.props.onActionClick.bind(this)}>
                Visit
                {/*insert text here for CTA text from data*/}
              </button>
              <button name="2"
                      onClick={this.props.onActionClick.bind(this)}>
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
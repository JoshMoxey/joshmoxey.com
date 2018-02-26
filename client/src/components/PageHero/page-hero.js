import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./page-hero.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import ActionList from "../ActionList/action-list"
import PageHeroDetails from "../PageHeroDetails/page-hero-details"
import HeroButtons from "../HeroButtons/hero-buttons"

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

    const category = this.props.header.category.map(function (cat, i) {
      if (i === 0) {
        return (<Link key={i} to={cat.href}>{cat.name}</Link>)
      } else {
        return (<span key={i}>, <Link to={cat.href}>{cat.name}</Link></span>)
      }
    })

    return (
      <div styleName="hero">
        <Banner banner={this.props.header.banner} styles={styles}/>
        <div styleName="heading">
          <div styleName="logo-container">
            <div styleName="img-sim"></div>
            <img src={imgSrc}/>
          </div>
          <div styleName="right">
            <h1 styleName={titleClass(title)}>{title}</h1>
            <h6>{category}</h6>
            <div styleName="bottom">
              <HeroButtons links={this.props.links}/>
              {/*<PageHeroDetails/>*/}
              {/*may want to put category too, in a container and margin everything in a way where it's all floating in opposite directions*/}
            </div>
          </div>
          <div styleName="hero-details">
            <PageHeroDetails type={"stack"}/>
          </div>
        </div>
        <PageHeroDetails type={"swiper"}/>
        <div styleName="divider">
          <div></div>
        </div>
      </div>
    )
  }
}

export default CSSModules(PageHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
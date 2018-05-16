import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./page-hero.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import ActionList from "../ActionList/action-list"
import PageHeroDetails from "../PageHeroDetails/page-hero-details"
import HeroButtons from "../HeroButtons/hero-buttons"
import {imgPath} from "../../global/global"

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
    const img = `${imgPath}/${this.props.style.img}`;
    const title = this.props.title
    const titleClass = (titleText) => {
      if (titleText.length > 60) {
        return 'long'
      } else if (titleText.length > 40) {
        return 'medium'
      } else {
        return 'short'
      }
    }

    const sectionIds = this.props.sectionIds.map((section, i) =>
      <span key={i}>
        {i !== 0 ? ", " : ""}
        <Link to={`/${section.id}`}>{section.title}</Link>
      </span>
    )

    return (
      <div styleName="hero">
        <Banner banner={this.props.style.banner} height={200}/>
        <div styleName="heading">
          <div styleName="logo-container">
            {/*<div styleName="img-sim"></div>*/}
            <img src={img}/>
          </div>
          <div styleName="right">
            <h1 styleName={titleClass(title)}>{title}</h1>
            <h6>{sectionIds}</h6>
            <div styleName="bottom">
              <HeroButtons links={this.props.links}/>
            </div>
          </div>
        </div>
        <PageHeroDetails type={"swiper"} details={this.props.details} />
        <div styleName="divider">
          <div></div>
        </div>
      </div>
    )
  }
}

export default CSSModules(PageHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
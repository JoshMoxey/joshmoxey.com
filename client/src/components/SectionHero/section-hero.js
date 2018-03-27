import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./section-hero.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import PageHeroDetails from "../PageHeroDetails/page-hero-details"
import HeroButtons from "../HeroButtons/hero-buttons"

class SectionHero extends Component {
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
            {/*<h2>Most recent</h2>*/}
            <HeroButtons links={this.props.links} white={true}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(SectionHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
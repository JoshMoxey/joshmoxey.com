import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./section-hero.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import PageHeroDetails from "../PageHeroDetails/page-hero-details"
import HeroButtons from "../HeroButtons/hero-buttons"
import {Parallax, Background} from 'react-parallax';

class SectionHero extends Component {
  render() {
    const titleClass = (titleText) => {
      if (titleText.length > 60) {
        return 'long'
      } else if (titleText.length > 40) {
        return 'medium'
      } else {
        return 'short'
      }
    }
    console.log(this.props)

    this.props.image = "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg"
    // setState of active
    // if state.open === true && this.section === variable[i], apply class of open.

    const backgroundColor = this.props.style.banner.color || "#666"
    const gradient = this.props.style.banner.gradient || "linear-gradient(-45deg, #444, #888)"
    const backgroundImage = this.props.style.banner.img ? `url(${this.props.image}), ${gradient}` : gradient
    const background = {
      backgroundColor,
      backgroundImage
    }

    return (
      <div styleName="hero">
        <Parallax
          strength={350}
        >
          <div styleName="sizing">
            <div styleName="title-container">
              <h1 styleName="">{this.props.title}</h1>
              {/*<h2>Most recent</h2>*/}
              <HeroButtons links={this.props.links} white={true}/>
            </div>
          </div>
          <Background>
            <div
              styleName="banner"
              style={background}
            >
            </div>
          </Background>
        </Parallax>
      </div>
    )
  }
}

export default CSSModules(SectionHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./section-hero.css";
import {Link} from "react-router-dom";
import Banner from "../Banner/banner"
import PageHeroDetails from "../PageHeroDetails/page-hero-details"
import HeroButtons from "../HeroButtons/hero-buttons"
import {Parallax, Background} from 'react-parallax';

class SectionHero extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("sh should update")
    console.log(this.props)
    console.log(nextProps)
    console.log(this.props.sectionId)
    console.log(nextProps.sectionId)
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      console.log("returned true")
      return true;
    }
    console.log("returned false somehow....")
    return false
  }

  render() {
    return (
      <div styleName="hero">
        <Banner
          banner={this.props.style.banner}
          height={200}
          alt={this.props.title}>
          {console.log(this.props.style.banner)}
          <div styleName="sizing">
            <div styleName="title-container">
              {/*<h1 styleName="">{this.props.title}</h1>*/}
              {/*<h2>Most recent</h2>*/}
              {console.log(this.props.title)}
              <HeroButtons links={this.props.links} white={true}/>
            </div>
          </div>
        </Banner>
      </div>
    )
  }
}

export default CSSModules(SectionHero, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
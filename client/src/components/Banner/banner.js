import React, {Component} from "react";
import CSSModules from "react-css-modules"
import styles from "./banner.css"
import {Parallax, Background} from 'react-parallax';
import {backgroundStyler, isMobile} from "../../global/global";

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.children !== nextProps.children) {
      return true
    }
    if (this.props.title !== nextProps.title) {
      return true
    }
    if (this.props.title !== nextProps.title) {
      return true
    }
    return false
  }

  render() {
    //todo
    //add dynamic height

    const alt = this.props.alt || ""
    const role = alt ? "img" : ""
    const height = this.props.height || ""
    return (
      <div styleName={`hero-banner ${this.props.banner.active ? "has-banner" : "no-banner"}`}>
        <Parallax strength={350} disabled={isMobile()}>
          <div
            styleName="sizing"
            style={{
              minHeight: `${height}px`
            }}>
            {this.props.children}
            {/*<div*/}
              {/*styleName="banner"*/}
              {/*style={backgroundStyler(this.props.banner)}*/}
              {/*role={role}*/}
              {/*aria-label={alt}*/}
            {/*>*/}
            {/*</div>*/}
          </div>
          <Background>
            <div
              styleName="banner"
              style={backgroundStyler(this.props.banner)}
              role={role}
              aria-label={alt}
            >
            </div>
          </Background>
        </Parallax>
      </div>
    )
  }
}

export default CSSModules(Banner, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
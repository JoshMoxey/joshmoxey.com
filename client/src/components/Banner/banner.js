import React, {Component} from "react";
import CSSModules from "react-css-modules"
import styles from "./banner.css"
import {Parallax, Background} from 'react-parallax';
import {backgroundStyler} from "../../global/global";
import Overlay from "../Overlay/overlay";

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props === nextProps && this.state === nextState
  }

  render() {
    //todo
    //add dynamic height

    const height = this.props.height || ""
    return (
      <div styleName={`hero-banner ${this.props.banner.active ? "has-banner" : "no-banner"}`}>
        <Parallax strength={350}>
          <div
            styleName="sizing"
            style={{
              minHeight: `${height}px`
            }}
          >
            {this.props.children}
          </div>
          <Background>
            <Overlay overlay={this.props.banner}/>
            <div
              styleName="banner"
              style={backgroundStyler(this.props.banner)}
            >
            </div>
          </Background>
        </Parallax>
      </div>
    )
  }
}

export default CSSModules(Banner, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
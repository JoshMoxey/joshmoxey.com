import React, {Component} from "react"
import {throttle} from "lodash"
import AnimateHeight from "react-animate-height"
import CSSModules from "react-css-modules"
import styles from "./text-clamp.css"

class TextClamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clampInitialized: false,
      clamped: true,
      clampable: true,
      height: 0.1,
      fixed: false,
    }
  }

  componentDidMount(props) {
    window.addEventListener("resize", this.calculateClamp)
    this.calculateClamp()

    //delay init so there's no transition speed on render while it calculates heigts
    setTimeout(() => {
      this.setState({clampInitialized: true})
    }, 100)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateClamp)
  }

  calculateClamp = throttle(() => {
    //define all the styles & remove "px"
    let style = window.getComputedStyle(this.p)
    let lineHeight = parseFloat(style.lineHeight)
    let paddingOfP = parseInt(style.paddingTop)
      + parseInt(style.paddingBottom)
    let maxHeightOfP = lineHeight * 3
      + parseInt(style.paddingTop)
    let actualHeightOfP = style.height === "auto"
      ? maxHeightOfP + .1
      : parseFloat(style.height) + parseInt(style.paddingTop)

    //for lines less than 3 with only one p, remove expand option
    if (actualHeightOfP < maxHeightOfP && this.props.text.length === 1) {
      this.setState({clampable: false})
    } else {
      this.setState({clampable: true})
    }

    //if p's lines are less than 3, show inline + match height of that p
    if (actualHeightOfP < maxHeightOfP) {
      this.setState({
        height: actualHeightOfP,
        fixed: false
      })
    } else { //if p's lines are 3 or more cut it off there + show fixed
      this.setState({
        height: maxHeightOfP,
        fixed: true,
      })
    }
  })

  toggleClamp() {
    // setTimeout(() => {
    this.setState({
      clamped: !this.state.clamped
    })
    // }, 500)
  }

  render() {
    if (!this.props.text) return (<div></div>)

    const extraText = this.props.text.map(function (text, i) {
      if (i !== 0) {
        return <p key={i}>{text}</p>
      }
    })

    let title = ""
    switch (this.props.title) {
      case false:
        break;
      case undefined:
        title = <h2>Description</h2>
        break;
      default:
        title = <h2>{this.props.title}</h2>
    }

    return (
      <section styleName="text-clamp">
        {title}
        <AnimateHeight
          height={this.state.clamped ? this.state.height : "auto"}
          duration={!this.state.clampInitialized ? 0 : 500}
          easing="ease"
          styleName={"container "
          + (this.state.clamped ? "clamped" : "expanded")
          + (this.state.fixed ? " fixed" : " inline")}>
          <p ref={(a) => this.p = a}>
            {this.props.text[0] + " "}
            {!this.state.clampable ? "" :
              (<span>
              <span ref={(a) => this.span = a}
                    styleName={"open inline"}
                    onClick={this.toggleClamp.bind(this)}>Show more</span>
              <span styleName={"open fixed"}
                    onClick={this.toggleClamp.bind(this)}>Show more</span>
            </span>)
            }
          </p>
          {extraText}
          <span
            styleName="close"
            onClick={this.toggleClamp.bind(this)}>
        Show less</span>
        </AnimateHeight>
      </section>
    )
  }
}

export default CSSModules(TextClamp, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
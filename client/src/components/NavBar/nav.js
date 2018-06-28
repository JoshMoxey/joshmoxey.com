import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom"
import CSSModules from 'react-css-modules';
import styles from './nav.css';
import {throttle} from "../../global/global";
import Svg from "../../components/Svg/svg"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: {
        color: `rgb(255, 255, 255)`,
        textShadow: `0px 1px 10px rgba(0, 0, 0, 0.5)`
      },
      icon: {
        color: `rgb(255, 255, 255)`,
        filter: `drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.5)`
      },
      background: {
        backgroundColor: `rgba(255, 255, 255, 0)`
      },
      border: {
        borderBottomColor: `rgba(234, 234, 234, 0)`
      }
    }
  }

  componentDidMount(props) {
    setInterval(this.scroll, 100)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
      return false
    }
    return true
  }

  scroll = () => {
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scroll = {
      x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
      y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    }

    //if banner exists
    //when 0, apply this 0 opacity
    //when 200, apply 100% opacity
    //calculate each color from 0 to 100
    //dropshadow, text color, icon color, background color
    const calcNumber = (a, b) => {
      if (scroll.y > 150) {
        return b
      }
      return a
      // let reverse = a < b
      // let ratio = reverse ? (scroll.y / 150) : 1 - (scroll.y / 150)
      // if (scroll.y > 150) {
      //   if (reverse) {
      //     ratio = 1
      //   } else {
      //     ratio = 0
      //   }
      // }
      // return ratio * (a + b)
    }

    //calc color
    //take highest and lowest
    //round to integer
    //return that number into rgb

    let t = calcNumber(255, 154)
    let i = calcNumber(255, 154)

    this.setState({
      text: {
        color: `rgb(${t}, ${t}, ${t})`,
        textShadow: `0px 1px 25px rgba(0, 0, 0, ${calcNumber(0.5, 0)})`
      },
      icon: {
        color: `rgb(${i}, ${i}, ${i})`,
        filter: `drop-shadow(0px 1px 10px rgba(0, 0, 0, ${calcNumber(0.5, 0)}))`
      },
      background: {
        backgroundColor: `rgba(255, 255, 255, ${calcNumber(0, .97)}`
      },
      border: {
        borderBottomColor: `rgba(234, 234, 234, ${calcNumber(0, 1)})`
      },
    })
  }

  render() {
    if (!this.props.links) return '';

    const NavIconLink = (props) =>
      <NavLink
        exact={props.exact}
        key={props.i}
        to={props.to}
        activeStyle={props.activeStyle}
      >
        <div styleName="icon">
          <Svg icon={props.icon}/>
        </div>
        <span>{props.title}</span>
      </NavLink>

    const mainIcons = this.props.links.map(function (icon, i) {
      if (icon.priority === 1) {
        return (
          <NavLink
            exact
            key={i}
            to={icon.url}
            activeStyle={{
              color: "#444"
            }}
          >
            <div styleName="icon">
              <Svg icon={icon.icon}/>
            </div>
            <span>{icon.title}</span>
          </NavLink>
        )
      }
    })

    const icons = this.props.links.map(function (icon, i) {
      return (
        <NavLink
          exact={i === 0}
          key={i}
          to={icon.url}
          activeStyle={{
            color: "#FFF"
          }}>
          <div styleName="icon">
            <Svg icon={icon.icon}/>
          </div>
          <span>{icon.title}</span>
        </NavLink>
      )
    })

    //   <NavIconLink
    // key={i}
    // to={icon.url}
    // activeStyle={{color: "#FFF"}}
    // icon={icon.icon}
    // title={icon.title}
    // />


    return (
      <div styleName="nav">
        <div styleName="top" style={{...this.state.background, ...this.state.border}}>
          <div styleName="left">
            {/*<a styleName="back">*/}
            {/*<Svg icon="back arrow1"/>*/}
            {/*</a>*/}
            <div
              styleName="title"
              style={this.state.text}>
              {this.props.title}
            </div>
          </div>
          <div styleName="right">
            {/*{mainIcons}*/}
            <a onClick={this.props.toggleSidebar.bind(this)}>
              <div styleName="icon">
                <Svg
                  icon="hamburger_2"
                  viewBox="0 0 38 32"
                  style={this.state.icon}
                />
              </div>
            </a>
          </div>
        </div>
        <div styleName="side">
          <a
            styleName="more"
            onClick={this.props.toggleSidebar.bind(this)}>
            <div styleName="icon">
              <Svg
                icon="hamburger_2"
                viewBox="0 0 38 32"
              />
            </div>
          </a>
          <div styleName="scroll">
            {icons}
          </div>
        </div>
        <div styleName="bottom">
          {/*{mainIcons}*/}
        </div>
      </div>
    )
  }
}

export default CSSModules(Nav, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
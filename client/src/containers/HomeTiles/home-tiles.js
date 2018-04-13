import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./home-tiles.css"
import {createSelector} from 'reselect'

import {fetchPagesByIds, fetchPagesBySection} from "../../actions/index";

import LinkPlus from "../../components/LinkPlus/link-plus"
import {Link} from "react-router-dom"
import {imgPath, backgroundStyling} from "../../global/global"
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class HomeTiles extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchPagesBySection(sectionId)
    //place request here for either sections, or featured tiles
  }

  render() {
    this.props.tiles = [
      {
        title: "The Josh Moxey Journey",
        href: "/podcast",
        background: {
          img: "http://dannykennedyfitness.com/wp-content/uploads/2017/05/151204-DailyVee_Episode_001_02_1920x1080.jpg",
          gradient: false,
          color: "#4b965a"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, architecto atque aut beatae, doloremque, eum ex perferendis perspiciatis porro quam repellat sapiente sint sit sunt veniam voluptatibus? Magni, sunt?"
      },
      {
        title: "Josh Moxey Radio",
        href: "/radio",
        background: {
          img: "http://dannykennedyfitness.com/wp-content/uploads/2017/05/151204-DailyVee_Episode_001_02_1920x1080.jpg",
          gradient: false,
          color: "#e26245"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, architecto atque aut beatae, doloremque, eum ex perferendis perspiciatis porro quam repellat sapiente sint sit sunt veniam voluptatibus? Magni, sunt?"
      },
      {
        title: "The Josh Moxey Journey",
        href: "/podcast",
        background: {
          img: false,
          gradient: false,
          color: "#ece72f"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, architecto atque aut beatae, doloremque, eum ex perferendis perspiciatis porro quam repellat sapiente sint sit sunt veniam voluptatibus? Magni, sunt?"
      }
    ]

    const tiles = this.props.tiles.map((tile, i) =>
      <div styleName="tile" key={i}>
        <Link
          to={tile.href}
          style={backgroundStyling(tile.background)}
          styleName="category">
          <div styleName="text">
            <h2>{tile.title}</h2>
            <ResponsiveEllipsis
              text={tile.description}
              maxLine={2}
              ellipsis={"..."}
            />
          </div>
        </Link>
      </div>
    )

    return (
      <div styleName="home-tiles">
        {tiles}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

const ComponentWithCSS = CSSModules(HomeTiles, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPagesByIds, fetchPagesBySection})(ComponentWithCSS);
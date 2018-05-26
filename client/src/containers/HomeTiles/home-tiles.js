import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./home-tiles.css"
import {createSelector} from 'reselect'

import {fetchPagesByIds, fetchPagesBySection} from "../../actions/index";

import LinkPlus from "../../components/LinkPlus/link-plus"
import {Link} from "react-router-dom"
import {imgPath, backgroundStyler} from "../../global/global"
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
          img: false,
          gradient: {
            color: "rgb(60, 63, 99), rgb(148, 159, 189)",
            angle: 30
          },
          color: false,
          overlay: true,
        },
        description: "Follow along as I share lessons, hacks, mindsets, etc. along my entrepreneurial and life journey"
      },
      {
        title: "Josh Moxey Radio",
        href: "/radio",
        background: {
          img: false,
          gradient: {
            angle: -70,
            color: "#6559f6, #f68a5c",
            // color: "#49b0ff, #ff4324, #b446d0"
          },
          color: false

        },
        description: "Playlists of my favourites songs, organized from softest to hardest"
      },
    ]

    const tiles = this.props.tiles.map((tile, i) =>
      <div styleName="tile" key={i}>
        <Link
          to={tile.href}
          style={backgroundStyler(tile.background)}
          styleName="category">
          <div styleName="text">
            <h1>{tile.title}</h1>
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
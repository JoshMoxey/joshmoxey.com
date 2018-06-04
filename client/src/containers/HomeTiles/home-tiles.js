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
        url: "/podcast",
        background: {
          // img: "josh-moxey-journey-banner-june-2018.png",
          gradient: {
            color: "rgb(50, 59, 121), rgb(148, 159, 189)",
            angle: 30
          },
          // overlay: true,
        },
        description: "Stories, lessons, hacks, mindsets, etc. along my entrepreneurial and life journey"
      },
      {
        title: "Josh Moxey Radio",
        url: "/radio",
        background: {
          // "img" : "josh-moxey-radio-music-banner.png",
          gradient: {
            angle: 170,
            color: "rgba(255,90,78, 1), rgba(255,90,78, 0) 90%"
          },
          gradient2: {
            angle: 80,
            color: "rgb(149,77,253), rgb(32,185,255)"
          },
          color: false
        },
        description: "Playlists of my favourites songs, organized from softest to hardest"
      },
    ]

    const tiles = this.props.tiles.map((tile, i) =>
      <div styleName="tile" key={i}>
        <Link
          to={tile.url}
          style={backgroundStyler(tile.background)}
          styleName="category">
          <div styleName="text">
            <h1>{tile.title}</h1>
            <div>{tile.description}</div>
            {/*<ResponsiveEllipsis*/}
              {/*text={tile.description}*/}
              {/*maxLine={2}*/}
              {/*ellipsis={"..."}*/}
            {/*/>*/}
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
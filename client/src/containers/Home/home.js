import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./home.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {fetchPage, updateTitle} from "../../actions/index";
import {titlify} from "../../global/global";
import Helmet from "react-helmet"

import Featured from "../../components/Featured/featured"
import PageList from "../PageList/page-list"
import HomeTiles from "../HomeTiles/home-tiles"
import {imgPathify} from "../../global/global";
import Banner from "../../components/Banner/banner"

class Home extends Component {
  render() {
    const banner = {
      active: true,
      color: false,
      gradient: "45deg, #6559f6,#f68a5c",
      img: false
    }

    const title = "Josh Moxey: Creator, Entrepreneur, Designer"
    this.props.updateTitle("Home")

    return (
      <div styleName="body">
        <Helmet>
          <title>{titlify(title)}</title>
        </Helmet>
        <Banner
          banner={banner}
          height={250}
        >
          <div styleName="header">
            <h1>Josh Moxey</h1>
            <h4>Creates what he wants to see in the world</h4>
          </div>
        </Banner>
        <div styleName="contents">
          <div styleName="main">
            <section>
              <h2>Sections</h2>
            </section>
            <HomeTiles/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  };
}

const ComponentWithCSS = CSSModules(Home, styles);
export default connect(mapStateToProps, {updateTitle})(ComponentWithCSS);
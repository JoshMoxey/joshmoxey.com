import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./home.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {fetchPage, updateTitle} from "../../actions/index";
import {titlify} from "../../global/global";
import Helmet from "react-helmet"
import ScrollMemory from 'react-router-scroll-memory';

import Featured from "../../components/Featured/featured"
import PageList from "../PageList/page-list"
import HomeTiles from "../HomeTiles/home-tiles"
import Socials from "../../components/Socials/socials"
import {imgPathify} from "../../global/global";
import Banner from "../../components/Banner/banner"
import SocialsGrid from "../../components/SocialsGrid/socials-grid"
import Footer from "../../components/Footer/footer"

class Home extends Component {
  render() {
    const banner = {
      active: true,
      // color: false,
      // gradient: {
      //   color: "#6559f6, #f68a5c",
      // },
      // img: "jeremy-thomas-98201-unsplash.jpg",
      // img: "quino-al-95074-unsplash.jpg",
      img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=811d0eee2d33079d05e78e3e187878e2&auto=format&fit=crop&w=1650&q=80",
      // img: "https://images.unsplash.com/photo-1511769845651-1a2546138d09?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f74a9a1cd607974d2029f15b8c0a6de6&auto=format&fit=crop&w=1650&q=80",

      overlay: {
        color: "60, 60, 60",
        opacity: .75,
      }
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
          height={300}>
          <div styleName="header">
            <h1>Josh Moxey</h1>
            {/*<h4>Creates what he wants to see in the world</h4>*/}
            <p>
              ...is 22 years old, living in Ontario, Canada. He's an entrepreneur, natural creative, obsessive learner, and much more. Josh is also
              documenting his journey of becoming world class in business and in life.
              {/*<Link to="/profile">Read more</Link>*/}
            </p>
            <Link to="/profile">Learn more</Link>
          </div>
        </Banner>
        <div styleName="contents">
          <div styleName="main">
            <section>
              <h2>Sections</h2>
            </section>
            <HomeTiles/>
            <SocialsGrid/>
          </div>
        </div>
        <Footer/>
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
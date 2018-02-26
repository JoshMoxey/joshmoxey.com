import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./profile.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {fetchPage} from "../../actions/index";

import PageList from "../../components/PageList/page-list"
import Banner from "../../components/Banner/banner"

class Profile extends Component {
  render() {
    const banner = {
      hasBanner: true,
      gradient: "45deg, #222, #888"
    }

    return (
      <div>
        <Banner banner={banner} />
        <h1>Josh Moxey</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  };
}

const ComponentWithCSS = CSSModules(Profile, styles);
export default connect(mapStateToProps, {fetchPage})(ComponentWithCSS);
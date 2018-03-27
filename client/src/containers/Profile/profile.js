import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./profile.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {fetchPage} from "../../actions/index";

import PageList from "../PageList/page-list"
import Banner from "../../components/Banner/banner"

class Profile extends Component {
  render() {
    const banner = {
      hasBanner: true,
      gradient: "45deg, #222, #888"
    }

    return (
      <div styleName="body">
        <Banner banner={banner} />
        <div styleName="header">
          <div styleName="img">
            {/*<img alt="Josh Moxey" src="http://www.comingsoon.net/assets/uploads/2017/07/spider-man-homecoming-df-24018-1.jpg"/>*/}
            <img src="http://3.bp.blogspot.com/-XDG1vT6dcDA/UySFkvTNLzI/AAAAAAAAUIs/pvsK1eNh9Ws/s1600/Robert+Downey+Jr.+in+suit.jpg" alt=""/>
          </div>
          <h1>Josh Moxey</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis, cumque cupiditate dolore doloremque eligendi enim harum incidunt iste iusto nihil officia quibusdam sunt veniam voluptatum. Atque est minima vitae.</p>
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

const ComponentWithCSS = CSSModules(Profile, styles);
export default connect(mapStateToProps, {fetchPage})(ComponentWithCSS);
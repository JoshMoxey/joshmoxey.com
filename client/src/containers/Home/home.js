import React, {Component} from "react"
import CSSModules from "react-css-modules"
import styles from "./home.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {fetchPage} from "../../actions/index";

import Featured from "../../components/Featured/featured"
import PageList from "../../components/PageList/page-list"

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <section>
          <Featured />
        </section>
        <PageList
          title="Featured page"
        />
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
export default connect(mapStateToProps, {fetchPage})(ComponentWithCSS);
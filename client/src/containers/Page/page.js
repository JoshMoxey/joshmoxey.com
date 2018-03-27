import React, {Component} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import CSSModules from "react-css-modules";

import styles from "./page.css";
import {fetchPage} from "../../actions/index";
import PageHero from "../../components/PageHero/page-hero"
import PageBody from "../../components/PageBody/page-body"

import ActionList from "../../components/ActionList/action-list"
import Preview from "../../components/Preview/preview"
import TextClamp from "../../components/TextClamp/text-clamp"
import PageList from "../PageList/page-list"
import Quote from "../../components/Quote/quote"
import ImagePopUp from "../../components/ImagePopUp/image-pop-up"

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePopUpActive: false,
      imagePopUpSrc: ""
    }
  }

  componentDidMount() {
    document.title = "joshmoxey.com"
    const sectionId = this.props.match.params.section
    const pageId = this.props.match.params.page
    this.props.fetchPage(sectionId, pageId);
  }

  togglePopUp(e) {
    //if it's open
    //check if it's clicking on non img, then close
    //if it's closed
    //check if it's clicking on img, then open
    if (!this.state.imagePopUpActive && e.target.tagName === "IMG") {
      this.setState({
        imagePopUpActive: true,
        imagePopUpSrc: e.target.src
      })
    }
    if (this.state.imagePopUpActive && e.target.tagName !== "IMG") {
      this.setState({
        imagePopUpActive: false
      })
    }
  }

  render() {
    if (!this.props.page) return (
      <div styleName="body-loading">
        <div>Loading...</div>
      </div>
    )

    const Loader = () => <div></div>


    const {body} = this.props.page;

    return (
      <div styleName={`body ${ this.props.sidebar.open ? "sidebar-open" : "sidebar-closed"}`} >
        <ImagePopUp
          active={this.state.imagePopUpActive}
          src={this.state.imagePopUpSrc}
          togglePopUp={this.togglePopUp.bind(this)}
        />
        <PageHero
          {... this.props.page}
        />
        <PageBody
          type={this.props.page.type}
          {... this.props.page.body}
          links={this.props.page.links}
        />
      </div>
    )
  }
}

function mapStateToProps({sidebar, pages}, ownProps) {
  console.log("pages: ", {pages})
  console.log("ownProps: ", ownProps)
  return {
    page: pages[`${ownProps.match.params.section}_${ownProps.match.params.page}`],
    sidebar: sidebar
  };
}

const ComponentWithCSS = CSSModules(Page, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPage})(ComponentWithCSS);
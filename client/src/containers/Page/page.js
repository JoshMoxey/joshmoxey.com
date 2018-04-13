import React, {Component} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import CSSModules from "react-css-modules";

import styles from "./page.css";
import {fetchPage, updateTitle} from "../../actions/index";
import PageHero from "../../components/PageHero/page-hero"
import PageBody from "../../components/PageBody/page-body"
import Status from "../../components/Error/error"

import ActionList from "../../components/ActionList/action-list"
import Preview from "../../components/Preview/preview"
import TextClamp from "../../components/TextClamp/text-clamp"
import PageList from "../PageList/page-list"
import Quote from "../../components/Quote/quote"
import ImagePopUp from "../../components/ImagePopUp/image-pop-up"
import Loading from "../../components/Loading/loading"
import {togglePopUp, titlify} from "../../global/global";
import Helmet from "react-helmet"

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePopUpActive: false,
      imagePopUpSrc: ""
    }
  }

  componentDidMount() {
    const sectionId = this.props.match.params.section
    const pageId = this.props.match.params.page
    this.props.fetchPage(sectionId, pageId);
  }

  componentDidUpdate() {
    // if (this.props) {
      this.props.updateTitle(this.props.page.title)
    // }
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
    console.log(this.props)
    if (!this.props.page)
      return <Loading/>

    if (this.props.page.status !== 200)
      return <Status status={this.props.page.status}/>

    return (
      <div styleName="body">
        <Helmet>
          <title>{titlify(this.props.page.title)}</title>
        </Helmet>
        <ImagePopUp
          active={this.state.imagePopUpActive}
          src={this.state.imagePopUpSrc}
          togglePopUp={this.togglePopUp.bind(this)}
        />
        <PageHero
          {... this.props.page}
        />
        <PageBody
          {... this.props.page.body}
          type={this.props.page.type}
          links={this.props.page.links}
        />
      </div>
    )
  }
}

function mapStateToProps({pages}, ownProps) {
  return {
    page: pages[`${ownProps.match.params.section}_${ownProps.match.params.page}`],
  };
}

const ComponentWithCSS = CSSModules(Page, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPage, updateTitle})(ComponentWithCSS);
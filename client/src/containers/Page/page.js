import React, {Component} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import CSSModules from "react-css-modules";

import styles from "./page.css";
import {fetchPage} from "../../actions/index";
import {toggleSidebar} from "../../actions/index";
import PageHero from "../../components/PageHero/page-hero"
import ActionList from "../../components/ActionList/action-list"
import Swiper from "../../components/swiper"
import Preview from "../../components/Preview/preview"
import TextClamp from "../../components/TextClamp/text-clamp"
import PageList from "../../components/PageList/page-list"
import Quote from "../../components/Quote/quote"
import Details from "../../components/Details/details"
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
    this.props.fetchPage();
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
    if (!this.props.page) return (
      <div styleName="body-loading">
        <div>Loading...</div>
      </div>
    )

    const actionLists = this.props.page.links.map((link, i) =>
      <ActionList key={i} static={true} links={link}/>
    )

    const {body} = this.props.page;

    return (
      <div styleName={`body ${ this.props.sidebar.open ? "sidebar-open" : "sidebar-closed"}`} >
        <ImagePopUp
          active={this.state.imagePopUpActive}
          src={this.state.imagePopUpSrc}
          togglePopUp={this.togglePopUp.bind(this)}
        />
        <PageHero
          header={this.props.page.header}
          links={this.props.page.links}
        />
        <div styleName="contents">
          <div styleName="primary">
            <Quote/>
            <PageList title={"Related"}/>
            <TextClamp
              text={this.props.page.body.description}
              title={"Okay okay"}
            />
            <Preview
              slides={this.props.page.body.preview}
              togglePopUp={this.togglePopUp.bind(this)}
            />
            {/*<section styleName="embed">*/}
            {/*<iframe frameBorder="0" height="200px" scrolling="no" seamless src={body.embed} width="100%"></iframe>*/}
            {/*</section>*/}
          </div>
          <div styleName="secondary">
            {actionLists}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    sidebar: state.sidebar
  };
}

const ComponentWithCSS = CSSModules(Page, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPage})(ComponentWithCSS);
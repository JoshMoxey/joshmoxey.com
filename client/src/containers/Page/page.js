import React, {Component} from "react";
import {connect} from "react-redux"
import CSSModules from "react-css-modules";
import Helmet from "react-helmet"
import ScrollMemory from 'react-router-scroll-memory';

import styles from "./page.css";
import {
  fetchPage,
  updateTitle,
  resetPageStatus,
  logPageView
} from "../../actions/index";
import PageHero from "../../components/PageHero/page-hero"
import PageBody from "../../components/PageBody/page-body"
import Status from "../Status/status"
import Loading from "../../components/Loading/loading"
import Footer from "../../components/Footer/footer"

import {togglePopUp, titlify} from "../../global/global";

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePopUpActive: false,
      imagePopUpSrc: ""
    }
  }

  componentDidMount() {
    const {section, page} = this.props.match.params
    if (!this.props.page) {
      this.props.resetPageStatus()
      this.props.fetchPage(section, page);
    }
    this.props.resetPageStatus()

    console.log("mount")
    console.log(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props)
    const sectionId = this.props.match.params.section
    const pageId = this.props.match.params.page
    if (this.props.page) {
      this.props.updateTitle(this.props.page.title)
    }
    console.log("componentDidUpdate")
    // console.log(sectionId, prevProps.match.params.section)
    // console.log(pageId, prevProps.match.params.page)
    if (sectionId !== prevProps.match.params.section ||
      pageId !== prevProps.match.params.page) {
      this.props.logPageView(sectionId, pageId)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false
  }

  render() {
    console.log("render")
    const page = this.props.page

    if (!page) {
      if (this.props.status && this.props.status !== 200)
        return <Status status={this.props.status}/>
      return <Loading/>
    }

    this.props.updateTitle(this.props.page.title)

    return (
      <div styleName="body">

        <Helmet>
          <title>{titlify(page.title)}</title>
        </Helmet>
        <PageHero
          {...page}
        />

        <PageBody
          {...page.body}
          type={page.type}
          links={page.links}
          togglePopUp={this.props.togglePopUp}
        />
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps({pages}, ownProps) {
  return {
    page: pages.pages[`${ownProps.match.params.section}_${ownProps.match.params.page}`],
    status: pages.status,
    sectionId: ownProps.match.params.section,
    pageId: ownProps.match.params.page
  };
}

const ComponentWithCSS = CSSModules(Page, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {
  fetchPage,
  updateTitle,
  resetPageStatus,
  logPageView
})(ComponentWithCSS);
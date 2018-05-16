import React, {Component} from "react";
import {connect} from "react-redux"
import CSSModules from "react-css-modules";

import styles from "./page.css";
import {fetchPage, updateTitle, resetPageStatus} from "../../actions/index";
import PageHero from "../../components/PageHero/page-hero"
import PageBody from "../../components/PageBody/page-body"
import Status from "../Status/status"

import Loading from "../../components/Loading/loading"
import {togglePopUp, titlify} from "../../global/global";
import Helmet from "react-helmet"
import ScrollMemory from 'react-router-scroll-memory';

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
    if (!this.props.page) {
      this.props.resetPageStatus()
      this.props.fetchPage(sectionId, pageId);
    }
  }

  componentDidUpdate() {
    if (this.props.page) {
      this.props.updateTitle(this.props.page.title)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props === nextProps || this.state === nextState
  }

  render() {
    const page = this.props.page

    if (!page) {
      if (this.props.status && this.props.status !== 200)
        return <Status status={this.props.status}/>
      return <Loading/>
    }

    return (
      <div styleName="body">
        <Helmet>
          <title>{titlify(page.title)}</title>
        </Helmet>
        <PageHero
          {... page}
        />

        <PageBody
          {... page.body}
          type={page.type}
          links={page.links}
          togglePopUp={this.props.togglePopUp}
        />
      </div>
    )
  }
}

function mapStateToProps({pages}, ownProps) {
  return {
    page: pages.pages[`${ownProps.match.params.section}_${ownProps.match.params.page}`],
    status: pages.status
  };
}

const ComponentWithCSS = CSSModules(Page, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPage, updateTitle, resetPageStatus})(ComponentWithCSS);
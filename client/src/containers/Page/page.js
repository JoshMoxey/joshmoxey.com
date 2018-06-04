import React, {Component} from "react";
import {connect} from "react-redux"
import CSSModules from "react-css-modules";
import Helmet from "react-helmet"
import ScrollMemory from 'react-router-scroll-memory';

import styles from "./page.css";
import {urlToIds} from "../../global/global";
import {
  fetchPage,
  updateTitle,
  resetPageStatus,
} from "../../actions/index";
import PageHero from "../../components/PageHero/page-hero"
import PageBody from "../../components/PageBody/page-body"
import Status from "../Status/status"
import Loading from "../../components/Loading/loading"
import Footer from "../../components/Footer/footer"

import {titlify} from "../../global/global";

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
  }

  componentDidUpdate(prevProps, prevState) {
    const {section, page} = this.props.match.params
    if (this.props.page) {
      this.props.updateTitle(this.props.page.title)
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
          currentIds={urlToIds(this.props.location.pathname)}
          sectionIds={page.sectionIds}
          more={page.more}
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
  const {section, page} = ownProps.match.params

  return {
    page: pages.pages[`${section}_${page}`],
    status: pages.status,
  };
}

const ComponentWithCSS = CSSModules(Page, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {
  fetchPage,
  updateTitle,
  resetPageStatus,
})(ComponentWithCSS);
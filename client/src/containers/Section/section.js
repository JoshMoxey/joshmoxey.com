import React, {Component} from "react";
import {connect} from "react-redux"
import {createSelector} from 'reselect'
import {fetchSection, fetchPagesBySection, updateTitle, resetSectionStatus} from "../../actions/index";

import CSSModules from "react-css-modules"
import styles from "./section.css"

import {Route, Switch, Redirect} from "react-router-dom"
import Helmet from "react-helmet"
import {titlify} from "../../global/global";
import ScrollMemory from 'react-router-scroll-memory';

import SectionHero from "../../components/SectionHero/section-hero"
import ActionList from "../../components/ActionList/action-list"
import Swiper from "../../components/swiper"
import Preview from "../../components/Preview/preview"
import TextClamp from "../../components/TextClamp/text-clamp"
import Related from "../../components/related"
import Quote from "../../components/Quote/quote"
import Details from "../../components/Details/details"
import PageList from "../PageList/page-list"
import NavSlider from "../../components/NavSlider/nav-slider"
import Loading from "../../components/Loading/loading"
import Status from "../Status/status"
import Footer from "../../components/Footer/footer"


class Section extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let section = this.props.match.params.section
    if (!this.props.section) {
      this.props.resetSectionStatus()
      this.props.fetchSection(section);
    }
    console.log("mount")
  }

  componentDidUpdate() {
    if (this.props.section) {
      this.props.updateTitle(this.props.section.title)
    }
    if (!this.props.section) {
      this.props.fetchSection(this.props.match.params.section);
    }
    // console.log(this.props.section)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should update")
    return true
    // if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
    //   return true;
    // }
    // if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
    //   return true;
    // }
    // return false
  }

  render() {
    const section = this.props.section
    console.log(section)

    if (!section) {
      if (this.props.status && this.props.status !== 200)
        return <Status status={this.props.status}/>
      if (this.props.redirect)
        return <Redirect to={this.props.redirect}/>
      return <Loading/>
    }

    const Default = () =>
      <div>
        <TextClamp
          text={section.body.description}
          title={false}
        />
        <PageList
          seeAll={true}
          url={`/${this.props.match.params.section}/recent`}
          id="recent"
          sectionId={this.props.match.params.section}
          limit={3}
        />
        <PageList
          seeAll={true}
          url={`/${this.props.match.params.section}/most-viewed`}
          id="most_viewed"
          sectionId={this.props.match.params.section}
          limit={3}
        />
      </div>

    const Recent = () =>
      <PageList
        id="recent"
        sectionId={this.props.match.params.section}
        focused={true}
        limit={false}
      />

    const MostViewed = () =>
      <PageList
        id="most_viewed"
        sectionId={this.props.match.params.section}
        focused={true}
        limit={false}
      />

    const actionLists = section.links.map((link, i) =>
      <ActionList key={i} static={true} links={link}/>
    )

    return (
      <div styleName="body">
        <Helmet>
          <title>{titlify(section.title)}</title>
        </Helmet>
        {/*{console.log("sectionId", this.props.match.params.section)}*/}
        <SectionHero
          {...section}
          sectionId={this.props.match.params.section}
        />
        <NavSlider
          location={this.props.location}
          url={this.props.match.url}
          sectionId={this.props.match.params.section}
          hiddenFilters={section.hiddenFilters}
        />
        <div styleName="contents">
          <div styleName="primary">
            <Switch>
              <Route
                path={`/${this.props.match.params.section}/recent`}
                component={Recent}
              />
              <Route
                path={`/${this.props.match.params.section}/most-viewed`}
                component={MostViewed}
              />
              <Route
                path={`/${this.props.match.params.section}`}
                component={Default}
              />
            </Switch>
          </div>
          <div styleName="secondary">
            {actionLists}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps({sections}, ownProps) {
  const sectionId = ownProps.match.params.section
  return {
    section: sections.sections[sectionId],
    status: sections.status,
    redirect: sections.redirect
  };
}

const ComponentWithCSS = CSSModules(Section, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {
  fetchSection,
  fetchPagesBySection,
  updateTitle,
  resetSectionStatus
})(ComponentWithCSS)
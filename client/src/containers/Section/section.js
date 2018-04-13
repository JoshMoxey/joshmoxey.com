import React, {Component} from "react";
import { connect } from "react-redux"
import { createSelector } from 'reselect'
import {fetchSection, fetchPagesBySection, updateTitle} from "../../actions/index";

import CSSModules from "react-css-modules"
import styles from "./section.css"

import {Route, Switch} from "react-router-dom"
import Helmet from "react-helmet"
import {titlify} from "../../global/global";

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


class Section extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let section = this.props.match.params.section
    this.props.fetchSection(section);
  }

  componentDidUpdate() {
    this.props.updateTitle(this.props.section.title)
  }

  render() {
    if (!this.props.section) return (
      <Loading/>
    )

    const Default = () =>
      <div>
        <TextClamp
          text={this.props.section.body.description}
          title={false}
        />
        <PageList
          href={`${this.props.match.url}/most-viewed`}
          id="recent"
          sectionId={this.props.match.params.section}
          limit={3}
        />
        <PageList
          href={`${this.props.match.url}/most-viewed`}
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
      />

    const MostViewed = () =>
      <PageList
        id="most_viewed"
        sectionId={this.props.match.params.section}
        focused={true}
      />

    const actionLists = this.props.section.links.map((link, i) =>
      <ActionList key={i} static={true} links={link}/>
    )

    return (
        <div styleName="body">
          <Helmet>
            <title>{titlify(this.props.section.title)}</title>
          </Helmet>
          <SectionHero
            {... this.props.section}
            focused={false}
          />
          <NavSlider
            location={this.props.location}
            url={this.props.match.url}
            sectionId={this.props.match.params.section}
          />
          <div styleName="contents">
            <div styleName="primary">
              {console.log("url:", this.props.match.url)}
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
        </div>
    )
  }
}

// const sortPages = createSelector(
//
// )

const sortPages = (obj, sectionId, property, reverse = true) => {
  property = "date"

  const checkSectionId = (page) => {
    let idStatus = false
    page.sectionIds.forEach(function(id) {
      if (id.id === sectionId) idStatus = true
    })
    return idStatus
  }

  return Object.values(obj)
    .filter(page => checkSectionId(page))
    .sort(function(a, b) {
      //define a & b w/ access to a property in details
      //property is dynamically selected w/ props
      //if reverse, the values are flipped around

      a = reverse ? a.details[property] : b.details[property]
      b = reverse ? b.details[property] : a.details[property]

      switch(property) {
        case "date":
          return new Date(a) - new Date(b)
          break;
        default:
          return (a) - (b)
      }
    })
}

function mapStateToProps({sections}, ownProps) {
  const sectionId = ownProps.match.params.section
  return {
    section: sections[sectionId],
  };
}

//object keys
//loop through each key
//if key.startsWith(sectionId)
//add it to array that's returned for section
//return full array
//sort somewhere in here?

const ComponentWithCSS = CSSModules(Section, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchSection, fetchPagesBySection, updateTitle})(ComponentWithCSS)
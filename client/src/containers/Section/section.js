import React, {Component} from "react";
import {connect} from "react-redux"
import {fetchSection} from "../../actions/index";

import CSSModules from "react-css-modules"
import styles from "./section.css"

import {Route, Switch} from "react-router-dom"

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

class Section extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.title = "Loading... - joshmoxey.com"
    this.props.fetchSection(); //this.props.params.pageId
    // this.setState({props: this.props})
  }

  render() {
    if (!this.props.page) return (
      <div styleName="body-loading">
        <div>Loading...</div>
      </div>
    )

    const Default = () =>
      <div>
        <TextClamp
          text={this.props.page.body.description}
          title={false}
        />
        <PageList
          title={"Recent"}
          href={`${this.props.match.url}/recent`}
          limit={3}
        />
        <PageList
          title={"Most Viewed"}
          href={`${this.props.match.url}/most-viewed`}
          limit={3}
        />
      </div>

    const Recent = () =>
      <PageList
        title={"Recent"}
        focused={true}
      />

    const MostViewed = () =>
      <PageList
        title={"Most Viewed"}
        focused={true}
      />

    const actionLists = this.props.page.links.map((link, i) =>
      <ActionList key={i} static={true} links={link}/>
    )

    const {body} = this.props.page;

    return (
      <Switch>
        <div styleName="body">
          <SectionHero
            header={this.props.page.header}
            links={this.props.page.links}
            focused={false}
          />
          <NavSlider
            location={this.props.location}
            url={this.props.match.url}
          />
          <div styleName="contents">
            <div styleName="primary">
              <Route
                path={`${this.props.match.url}/recent`}
                component={Recent}
              />
              <Route
                path={`${this.props.match.url}/most-viewed`}
                component={MostViewed}
              />
              <Route
                path={`${this.props.match.url}`}
                component={Default}
              />
            </div>
            <div styleName="secondary">
              {actionLists}
            </div>
          </div>
        </div>
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  };
}

const ComponentWithCSS = CSSModules(Section, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchSection})(ComponentWithCSS)
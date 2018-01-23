import React, {Component} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import CSSModules from "react-css-modules";

import styles from "../../style/page.css";
import {fetchPage} from "../actions/index";

import PageHero from "./page-hero"
import ActionList from "./action-list"
import Swiper from "./swiper"
import Preview from "./preview"
import TextClamp from "./text-clamp"
import Related from "./related"
import Quote from  "./quote"
import Details from "./details"

class Page extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    document.title = "joshmoxey.com"
    this.props.fetchPage();
    // this.setState({props: this.props})
  }

  render() {
    if (!this.props.page) return (
      <div styleName="body-loading">
        <div>Loading...</div>
      </div>
    )

    const actionLists = this.props.page.links.map((x, i) =>
      <ActionList key={i} static={true} links={this.props.page.links[i]}/>
    )

    const {body} = this.props.page;

    return (
      <div styleName="body">
        <PageHero
          header={this.props.page.header}
          links={this.props.page.links}
        />
        <div styleName="contents">
          <div styleName="primary">
            <Quote />
            <section>
              <h2>Related</h2>
              <Related/>
            </section>
            <section styleName="desc">
              <h2>Description</h2>
              <TextClamp
                text={this.props.page.body.description}
              />
            </section>
              <Preview
                slides={this.props.page.body.preview}
              />
            {/*<section styleName="embed">*/}
            {/*<iframe frameBorder="0" height="200px" scrolling="no" seamless src={body.embed} width="100%"></iframe>*/}
            {/*</section>*/}
          </div>
          <div styleName="secondary">
            <section>
              <h2>Details</h2>
            <Details/>
            </section>
            {actionLists}
            <section>
              <h2>Related</h2>
              <Related/>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  };
}

const ComponentWithCSS = CSSModules(Page, styles);
export default connect(mapStateToProps, {fetchPage})(ComponentWithCSS);
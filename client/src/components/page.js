import React, {Component} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import CSSModules from "react-css-modules";

import styles from "../../style/page.css";
import {fetchPage} from "../actions/index";

import PageHero from "./page-hero"
import ActionList from "./action-list"
import Swiper from "./swiper"
import TextClamp from "./text-clamp"

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
      <div>
        <ActionList static={true} links={this.props.page.links[i]}/>
      </div>
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
            {/*<section styleName="quote">*/}
            {/*<div styleName="symbol">*/}
            {/*<div styleName="container">*/}
            {/*<svg viewBox="0 0 32 32">*/}
            {/*<path*/}
            {/*d="M19.495 1.659c-11.469 2.654-19.572 13.099-17.11 22.046 0.818 2.982 3.406 5.766 6.127 6.595 7.366 2.245 13.685-4.914 10.308-11.683-1.279-2.562-2.957-3.823-5.722-4.299l-0.723-0.125 0.048-0.406c0.509-4.299 2.503-7.119 7.17-10.135l0.903-0.583v-0.796c0-0.933 0.096-0.874-1.003-0.616z"></path>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 32 32">*/}
            {/*<path*/}
            {/*d="M19.495 1.659c-11.469 2.654-19.572 13.099-17.11 22.046 0.818 2.982 3.406 5.766 6.127 6.595 7.366 2.245 13.685-4.914 10.308-11.683-1.279-2.562-2.957-3.823-5.722-4.299l-0.723-0.125 0.048-0.406c0.509-4.299 2.503-7.119 7.17-10.135l0.903-0.583v-0.796c0-0.933 0.096-0.874-1.003-0.616z"></path>*/}
            {/*</svg>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div styleName="raw">I'm sick of the fronting and the bullshit in 2017.</div>*/}
            {/*</section>*/}
            <section styleName="desc">
              <h2>Description</h2>
              <TextClamp
                text={this.props.page.body.description}
              />
            </section>
            {/*<section styleName="embed">*/}
            {/*<iframe frameBorder="0" height="200px" scrolling="no" seamless src={body.embed} width="100%"></iframe>*/}
            {/*</section>*/}
          </div>
          <div styleName="secondary">
            {actionLists}
            {/*<section styleName="listen-links">*/}
              {/*// <h2>Listen to this episode</h2>*/}
              {/*//*/}
            {/*</section>*/}
            {/*//*/}
            {/*<section styleName="share-links">*/}
              {/*// <h2>Share this episode</h2>*/}
              {/*//*/}
              {/*//*/}
            {/*</section>*/}
            {/*<section styleName="full-width">*/}
            {/*<h2>Related</h2>*/}
            {/*<Swiper slides={body.related}/>*/}
            {/*</section>*/}
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
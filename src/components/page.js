import React, {Component} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "../../style/page.css";
import {fetchPage} from "../actions/index";

import PageHero from "./page-hero"
import PageDesc from "./page-desc"
import ActionList from "./action-list"

class Page extends Component {
  componentDidMount() {
    this.props.fetchPage();
  }
  
  constructor() {
    super()
    this.state = {
      actionListOpen: false,
      actionListSource: 1
    }
  }
  
  toggleActionList(e, ) {
    console.log(e)
    this.setState({actionListOpen: !this.state.actionListOpen})
  }
  
  render() {
    if (!this.props.page) return (
      <div styleName="body-loading">
        <div>Loading...</div>
      </div>
    )
    
    
    const desc = this.props.page.content.description
      .map((text, i) =>
        <div key={i}>{text}</div>
      )
    
    const {content} = this.props.page;
    console.log(content.listenLinks)
    
    return (
      <div styleName="body">
        <ActionList
          onActionClick={this.toggleActionList.bind(this)}
          actionListOpen={this.state.actionListOpen}
          links={this.props.page.content.shareLinks}
        />
        <PageHero
          onActionClick={this.toggleActionList.bind(this)}
          data={this.props.page.header}
          links={this.props.page.content.listenLinks}
        />
        <div styleName="contents">
          <div styleName="primary">
            <section styleName="quote">
              <div styleName="symbol">
                <div styleName="container">
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M19.495 1.659c-11.469 2.654-19.572 13.099-17.11 22.046 0.818 2.982 3.406 5.766 6.127 6.595 7.366 2.245 13.685-4.914 10.308-11.683-1.279-2.562-2.957-3.823-5.722-4.299l-0.723-0.125 0.048-0.406c0.509-4.299 2.503-7.119 7.17-10.135l0.903-0.583v-0.796c0-0.933 0.096-0.874-1.003-0.616z"></path>
                  </svg>
                  <svg viewBox="0 0 32 32">
                    <path
                      d="M19.495 1.659c-11.469 2.654-19.572 13.099-17.11 22.046 0.818 2.982 3.406 5.766 6.127 6.595 7.366 2.245 13.685-4.914 10.308-11.683-1.279-2.562-2.957-3.823-5.722-4.299l-0.723-0.125 0.048-0.406c0.509-4.299 2.503-7.119 7.17-10.135l0.903-0.583v-0.796c0-0.933 0.096-0.874-1.003-0.616z"></path>
                  </svg>
                </div>
              </div>
              <div styleName="raw">I'm sick of the fronting and the bullshit in 2017.</div>
            </section>
            <section styleName="desc" data-collapsed="true">
              <h2>Description</h2>
              {desc}
              <span styleName="show">show</span>
            </section>
            <section styleName="embed">
              <iframe frameBorder="0" height="200px" scrolling="no" seamless src={content.embed} width="100%"></iframe>
            </section>
          </div>
          <div styleName="secondary">
            <section styleName="listen-links">
              <h2>Listen to this episode</h2>
              <div styleName="container">
              </div>
            </section>
            <section styleName="share-links">
              <h2>Share this episode</h2>
              <div styleName="container">
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

// export default Page;

function mapStateToProps(state) {
  return {
    page: state.page
  };
}

const ComponentWithCSS = CSSModules(Page, styles);
export default connect(mapStateToProps, {fetchPage})(ComponentWithCSS);
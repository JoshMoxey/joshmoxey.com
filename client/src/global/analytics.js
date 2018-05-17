import React, { Component } from "react"
import ReactGA from "react-ga"

class Analytics extends Component {
  constructor(props) {
    super(props)
    this.sendPageChange(props.location.pathname, props.location.search)
    console.log(NODE_ENV, "anakytics")
  }

  componentDidUpdate(prevProps) {
    // When props change, check if the URL has changed or not
    if (this.props.location.pathname !== prevProps.location.pathname
      || this.props.location.search !== prevProps.location.search) {
      this.sendPageChange(prevProps.location.pathname, prevProps.location.search)
    }
  }

  sendPageChange(pathname, search = "") {
    const page = pathname + search
    ReactGA.set({page});
    ReactGA.pageview(page);
  }

  render() {
    return null
  }
}

export default Analytics
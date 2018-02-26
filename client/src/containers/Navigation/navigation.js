import React, { Component} from "react"
import {connect} from "react-redux"

import {toggleSidebar} from "../../actions"

import Sidebar from "../../components/Sidebar/sidebar"
import NavBar from "../../components/NavBar/nav"

class Navigation extends Component {

  render() {
    return (
      <div onClick={this.props.toggleSidebar.bind(this)}>
        <Sidebar sidebar={this.props.sidebar}/>
        <NavBar sidebar={this.props.sidebar}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sidebar: state.sidebar
  };
}

export default connect(mapStateToProps, {toggleSidebar})(Navigation);
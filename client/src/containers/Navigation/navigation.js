import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./navigation.css"
import {Route} from "react-router-dom"

import {toggleSidebar} from "../../actions"

import Sidebar from "../../components/Sidebar/sidebar"
import NavBar from "../../components/NavBar/nav"

class Navigation extends Component {
  render() {
    const links = [
      {
        title: "Home",
        icon: "home",
        href: "/",
        priority: 1,
        children: []
      },
      {
        title: "Profile",
        icon: "profile",
        href: "/profile",
        priority: 1,
        children: []
      },

      // {
      //   title: "Work",
      //   icon: "work",
      //   href: "/work",
      //   priority: 1,
      //   children: [
      //     {
      //       title: "Services",
      //       icon: "users",
      //       href: "/services",
      //       children: []
      //     },
      //     {
      //       title: "Code",
      //       icon: "code",
      //       href: "/websites",
      //       children: []
      //     },
      //     {
      //       title: "Designs",
      //       icon: "art",
      //       href: "/designs",
      //       children: []
      //     },
      //     {
      //       title: "Video edits",
      //       icon: "film",
      //       href: "/edits",
      //       children: []
      //     },
      //   ]
      // },
      // {
      //   title: "Content",
      //   icon: "play",
      //   href: "/content",
      //   priority: 1,
      //   children: [
          {
            title: "Podcast",
            icon: "podcast",
            href: "/podcast",
            children: []
          },
          // {
          //   title: "Films",
          //   icon: "play",
          //   href: "/films",
          //   children: []
          // },
          {
            title: "Josh Moxey Radio",
            icon: "music",
            href: "/radio",
            children: []
          },
          // {
          //   title: "Gems",
          //   icon: "gem2",
          //   href: "/gems",
          //   children: []
          // },
          // {
          //   title: "Articles",
          //   icon: "note",
          //   href: "/articles",
          //   children: []
          // },
          // {
          //   title: "Photography",
          //   icon: "photography",
          //   href: "/photography",
          //   children: []
          // }
      //   ]
      // },
      {
        title: "Socials",
        icon: "link2",
        href: "/social",
        priority: 2,
        children: []
      },
    ]

    return (
      <div styleName="navigation">
        <div
          styleName={`overlay ${this.props.sidebar.open ? "open" : ""}`}
          onClick={this.props.toggleSidebar.bind(this)}
        ></div>
        <Sidebar
          sidebar={this.props.sidebar}
          toggleSidebar={this.props.toggleSidebar}
          links={links}
        />
        <NavBar
          sidebar={this.props.sidebar}
          toggleSidebar={this.props.toggleSidebar}
          links={links}
          title={this.props.title}
        />
      </div>
    )
  }
}

function mapStateToProps({sidebar, title}) {
  return {
    sidebar: sidebar,
    title: title
  };
}

const ComponentWithCSS = CSSModules(Navigation, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {toggleSidebar})(ComponentWithCSS);
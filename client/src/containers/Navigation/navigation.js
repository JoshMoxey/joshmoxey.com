import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./navigation.css"
import {Route} from "react-router-dom"
import {toggleSidebar} from "../../actions"
import {urlToIds} from "../../global/global"
import Sidebar from "../../components/Sidebar/sidebar"
import NavBar from "../../components/NavBar/nav"

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: false,
      prevIds: false
    }
    this.timeout = 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.title !== nextProps.title) {
      return true
    }
    if (JSON.stringify(this.props.sidebar) !== JSON.stringify(nextProps.sidebar)) {
      return true
    }
    if (this.state.init && JSON.stringify(urlToIds(this.props.location.pathname))
      === JSON.stringify(urlToIds(nextProps.location.pathname))) {
      return false
    }
    if (!nextProps.page && !nextProps.section) {
      return false
    }
    if (JSON.stringify(this.state.prevIds) !== JSON.stringify(nextState.prevIds)) {
      return false
    }
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      return true;
    }
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false
  }

  //check if the page exists, aka non 404
  //if no 404
  //reset timer
  //at 5 seconds, check if props are still the same
  //if they are, fire increaseCount
  //access section and page if possible
  //mapstatetoprops
  //check if there's a page/section with that id
  //if there is, settimeout

  startTimeout = () => {
    if (!this.state.init) {this.setState({init: true})}
    clearInterval(this.timeout)
    const idsAtInit = urlToIds(this.props.location.pathname)
    this.timeout = setTimeout(function () {
      const idsAtCall = urlToIds(this.props.location.pathname)
      if (JSON.stringify(idsAtInit) === JSON.stringify(idsAtCall)) {
        console.log("equal, send simulation for", idsAtInit.type)
        this.setState({prevIds: idsAtInit})
      }
    }.bind(this), 5000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update")
    if (this.props.page || this.props.section) {
      console.log("page or section exists")
      const thisIds = urlToIds(this.props.location.pathname)
      const prevIds = urlToIds(prevProps.location.pathname)
      console.log("!this.state.init", !this.state.init)
      if (!this.state.init || JSON.stringify(thisIds) !== JSON.stringify(this.state.prevIds)) {
        console.log("startTimeout, didupdate")
        console.log("UPDATE TO /PAGE/SECTION?TYPE?")
        this.startTimeout()
      }
    }
  }

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

function mapStateToProps({title, pages, sections}, ownProps) {
  const {page, section} = urlToIds(ownProps.location.pathname)
  const id = page ? `${section}_${page}` : section

  return {
    title: title,
    page: pages.pages[id],
    section: sections.sections[id]
  }
}

const ComponentWithCSS = CSSModules(Navigation, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps)(ComponentWithCSS)
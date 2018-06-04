import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./navigation.css"
import {Route} from "react-router-dom"
import {toggleSidebar, increaseViewCount} from "../../actions"
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
      //if main route hasn't changed since timeout
      if (JSON.stringify(idsAtInit) === JSON.stringify(idsAtCall)) {
        const {id, type} = idsAtInit
        this.props.increaseViewCount(id, type)
        this.setState({prevIds: idsAtInit})
      }
    }.bind(this), 5000)
  }

  componentDidUpdate(prevProps, prevState) {
    //if there's a page or section with the currentIds
    if (this.props.page || this.props.section) {
      const thisIds = urlToIds(this.props.location.pathname)
      const prevIds = urlToIds(prevProps.location.pathname)
      //if the ids are new (except for the first time)
      //basically, is there's a new page
      if (!this.state.init || JSON.stringify(thisIds) !== JSON.stringify(this.state.prevIds)) {
        this.startTimeout()
      }
    }
  }

  render() {
    const links = [
      {
        title: "Home",
        icon: "home",
        url: "/",
        priority: 1,
        children: []
      },
      {
        title: "Profile",
        icon: "profile",
        url: "/profile",
        priority: 1,
        children: []
      },
      // {
      //   title: "Work",
      //   icon: "work",
      //   url: "/work",
      //   priority: 1,
      //   children: [
      //     {
      //       title: "Services",
      //       icon: "users",
      //       url: "/services",
      //       children: []
      //     },
      //     {
      //       title: "Code",
      //       icon: "code",
      //       url: "/websites",
      //       children: []
      //     },
      //     {
      //       title: "Designs",
      //       icon: "art",
      //       url: "/designs",
      //       children: []
      //     },
      //     {
      //       title: "Video edits",
      //       icon: "film",
      //       url: "/edits",
      //       children: []
      //     },
      //   ]
      // },
      // {
      //   title: "Content",
      //   icon: "play",
      //   url: "/content",
      //   priority: 1,
      //   children: [
      {
        title: "Podcast",
        icon: "podcast",
        url: "/podcast",
        children: []
      },
      {
        title: "Josh Moxey Radio",
        icon: "music",
        url: "/radio",
        children: []
      },
      // {
      //   title: "Films",
      //   icon: "play",
      //   url: "/films",
      //   children: []
      // },
      // {
      //   title: "Gems",
      //   icon: "gem2",
      //   url: "/gems",
      //   children: []
      // },
      // {
      //   title: "Articles",
      //   icon: "note",
      //   url: "/articles",
      //   children: []
      // },
      // {
      //   title: "Photography",
      //   icon: "photography",
      //   url: "/photography",
      //   children: []
      // }
      //   ]
      // },
      // {
      //   title: "Socials",
      //   icon: "link2",
      //   url: "/social",
      //   priority: 2,
      //   children: []
      // },
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
export default connect(mapStateToProps, {increaseViewCount})(ComponentWithCSS)
import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./page-list.css"

import {fetchPagesByIds} from "../../actions/index";
import {fetchPage} from "../../actions/index";

import LinkPlus from "../../components/LinkPlus/link-plus"
import {Link} from "react-router-dom"
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class PageList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let {ids} = this.props
    console.log("this.props.pages:", ids)
    this.props.fetchPagesByIds(ids);
  }

  render() {
    //todo
    console.log(this.props)
    //small, medium or big size of icon:
    //if link = true
    //if focused = true: title bigger, buttons shown, titles fully shown, etc.?

    // this.props.pages = [
    //   {
    //     href: "https://google.com",
    //     img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
    //     title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
    //     detail: {
    //       text: "Category",
    //       href: "cat"
    //     }
    //   },
    //   {
    //     href: "https://google.com",
    //     img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
    //     title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
    //     detail: {
    //       text: "Category",
    //       href: "cat"
    //     }
    //   },
    // ]

    //potentially do the pages one by one
    //
    //

    if (!this.props.pages) return ""

    let limit = ""
    if (this.props.limit === false) {
      limit = this.props.pages.length
    } else if (this.props.limit === undefined) {
      limit = 6
    } else {
      limit = this.props.limit
    }


    let title = ""
    if (this.props.focused) {
      // seeAll === ""
      if (this.props.title === false) {
        title = ""
      } else if (this.props.title === undefined) {
        title = <h2>Pages</h2>
      } else {
        title = <h2>{this.props.title}</h2>
      }
    } else {
      if (this.props.title === false) {
        title = ""
      } else if (this.props.title === undefined) {
        title = <Link to={`/${this.props.href}`}><h2>Pages</h2></Link>
      } else {
        title = <Link to={`/${this.props.href}`}><h2>{this.props.title}</h2></Link>
      }
    }

    let seeAll = <Link to={`${this.props.href}`}>
      <span styleName="test">See All</span>
    </Link>

    if (this.props.focused || this.props.href === undefined || limit === this.props.pages.length) {
      seeAll = ""
    }

    const pages = this.props.pages.map(function (link, i) {
      if (i < limit) return (
        <div styleName="page" key={i}>
          <Link to={link.href} styleName="img-container">
            <img src={link.img} alt={link.title}/>
          </Link>
          <div styleName="text">
            <Link to={link.href} styleName="title">
              <ResponsiveEllipsis
                text={link.title}
                maxLine={2}
                ellipsis={"..."}
              />
            </Link>
            <Link to={link.detail.href} styleName="category">{link.detail.text}</Link>
          </div>
        </div>
      )
    })

    return (
      <section styleName="pages">
        <div styleName="heading">
          {title}
          {seeAll}
        </div>
        {pages}
      </section>
    )
  }
}

function mapStateToProps({pages}, ownProps) {
  return {
    // page: pages[`${ownProps.match.params.section}_${ownProps.match.params.page}`],
  };
}

const ComponentWithCSS = CSSModules(PageList, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPagesByIds})(ComponentWithCSS);
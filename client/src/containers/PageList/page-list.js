import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./page-list.css"
import {createSelector} from 'reselect'

import {fetchPagesByIds, fetchPagesBySection} from "../../actions/index";

import LinkPlus from "../../components/LinkPlus/link-plus"
import {Link} from "react-router-dom"
import {imgPath} from "../../global/global"
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import Loading from "../../components/Loading/loading"

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class PageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 0,
      sort: 0,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props === nextProps || this.state === nextState
  }

  componentDidMount() {
    let {ids, sectionId} = this.props

    //todo conditional creates bug of no extra pages being loaded if there's already some pages there

    // if (Object.keys(this.props.pages.pages).length === 0) {
    //   return true
    // }
    // return JSON.stringify(this.props.pages.pages) === JSON.stringify(nextProps.pages)


    // SET FETCHING/FETCHED STATUS IN REDUCER.


    // if (!this.props.filteredPages.length) {
      switch (this.props.id) {
        case "recent":
        case "most_viewed":
          this.props.fetchPagesBySection(sectionId)
          this.setState({fetched: true})
          break;
        case "related":
          this.props.fetchPagesByIds(ids)
          break;
      }
    // }

    //if it's a related component (ie. ids), fetchbyids
    //if it's a section component, fetchbysection w/ limit
    //if it's a section focused component, fetchbysection w/ limit & sort included
  }

  render() {
    //todo
    //small, medium or big size of icon:
    //if link = true
    //if focused = true: title bigger, buttons shown, titles fully shown, etc.?

    const idObject = {
      recent: {
        title: "Recent",
        href: "/recent",
      },
      most_viewed: {
        title: "Most Viewed",
        href: "most-viewed",
      },
      related: {
        title: "Related",
        href: "related",
      }
    }

    const {id} = this.props
    if (!id) throw new Error("id property wasn't specified wherever this component was called")

    let {title} = idObject[id]

    const {filteredPages} = this.props

    let limit = ""
    if (this.props.limit === false) {
      limit = filteredPages.length
    } else if (this.props.limit === undefined) {
      limit = 6
    } else {
      limit = this.props.limit
    }

    let titleElement = ""
    if (this.props.focused
      || !limit
      || limit === undefined
      || limit > filteredPages.length
      || !this.props.href
    ) {
      if (this.props.title === false) {
        titleElement = ""
      } else if (this.props.title) {
        titleElement = <h2>{this.props.title}</h2>
      } else {
        titleElement = <h2>{title}</h2>
      }
    } else {
      if (this.props.title === false) {
        titleElement = ""
      } else if (this.props.title) {
        titleElement = <Link to={`/${this.props.href}`}><h2>{this.props.title}</h2></Link>
      } else {
        titleElement = <Link to={`/${this.props.href}`}><h2>{title}</h2></Link>
      }
    }

    let seeAll = <Link to={`${this.props.href}`}>
      <span styleName="test">See All</span>
    </Link>

    if (this.props.focused || this.props.href === undefined || limit === filteredPages.length) {
      seeAll = ""
    }

    const pages = filteredPages.map(function (link, i) {
      let href = `/${link.sectionIds[0].id}/${link.pageIds[0]}`
      let detail = {
        title: link.sectionIds[0].title,
        href: `/${link.sectionIds[0].id}`
      }
      const img = `${imgPath}/${link.style.img}`;

      if (i < limit) return (
        <div styleName="page" key={i}>
          <Link
            to={href}
            styleName="img-container">
            <img src={img} alt={link.title}/>
          </Link>
          <div styleName="text">
            <Link to={href} styleName="title">
              <ResponsiveEllipsis
                text={link.title}
                maxLine={2}
                ellipsis={"..."}
              />
            </Link>
            <Link to={detail.href} styleName="category">
              {detail.title}
            </Link>
          </div>
        </div>
      )
    })

    return (
      <section styleName="pages">
        <div styleName="heading">
          {titleElement}
          {seeAll}
        </div>
        {filteredPages.length ? //if it has pages
          pages :
          <Loading/>
        }
      </section>
    )
  }
}

const returnPagesByIds = createSelector(
  (state, props) => state.pages,
  (state, props) => props.ids,
  (pages, ids) => {
    if (!pages) return []
    if (!ids) return []
    //get keys of the object
    return Object.keys(pages)
      //only return keys (ie. "podcast_001") to the pages which have have an (mongodb objectId) _id that is equal to one of the ids in the array "ids"
      .filter((key) => {
        return ids.includes(pages[key]._id)
      })
      .reduce((array, key) => {
        return [...array, pages[key]]
      }, []);
  }
)

const returnPagesBySection = createSelector(
  (state, props) => state.pages,
  (state, props) => props.sectionId,
  (state, props) => props.id,
  (obj, sectionId, filterId) => {
  const checkSectionId = (page) => {
    let idStatus = false
    page.sectionIds.forEach(function(id) {
      if (id.id === sectionId) idStatus = true
    })
    return idStatus
  }

  const filters = {
    recent: {
      property: "date_published",
      reverse: false,
    },
    most_viewed: {
      property: "views",
      reverse: false,
    },
  }

  if (!filters[filterId]) return []
  let {property, reverse} = filters[filterId]

  if (!Object.values(obj)) return []

  return Object.values(obj)
    .filter(page => checkSectionId(page))
    .sort(function(x, y) {
      //define a & b w/ access to a property in details
      //property is dynamically selected w/ props
      //if reverse, the values are flipped around

      let a = reverse ? x.details[property] : y.details[property]
      let b = reverse ? y.details[property] : x.details[property]

      switch(property) {
        case "date_published":
          return new Date(a) - new Date(b)
          break;
        default:
          return (a) - (b)
      }
    })
})

function mapStateToProps(state, ownProps) {
  let returnPages
  switch (ownProps.id) {
    case "recent":
    case "most_viewed":
      returnPages = returnPagesBySection(state.pages, ownProps)
      break;
    case "related":
      returnPages = returnPagesByIds(state.pages, ownProps)
      break;
    default:
      throw new Error("No selector specified in PageList's filter in mapStateToProps")
  }

  return {
    filteredPages: returnPages,
    pages: state.pages
  }
}

const ComponentWithCSS = CSSModules(PageList, styles, {allowMultiple: true, handleNotFoundStyleName: "log"});
export default connect(mapStateToProps, {fetchPagesByIds, fetchPagesBySection})(ComponentWithCSS);
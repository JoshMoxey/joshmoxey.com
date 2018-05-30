import React, {Component} from "react"
import {connect} from "react-redux"
import CSSModules from "react-css-modules"
import styles from "./page-list.css"
import {createSelector} from 'reselect'

import {fetchPagesByIds, fetchPagesByMore, fetchPagesBySection} from "../../actions/index";

import LinkPlus from "../../components/LinkPlus/link-plus"
import {Link} from "react-router-dom"
import {
  imgPath,
  sectionTitles,
  defaultMoreSchema
} from "../../global/global"
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
    let {ids, sectionIds, featured, skip, limit, sort} = this.props
    const sectionId = sectionIds[0]

    const options = {
      featured: this.props.featured || false,
      limit: this.props.limit || 0,
      skip: this.props.skip || 0,
      sort: this.props.sort || false
    }

    switch (this.props.id) {
      case "recent":
      case "most_viewed":
        this.props.fetchPagesBySection(sectionId, options)
        break;
      case "more":
        this.props.fetchPagesByMore(sectionId)
        break;
    }
    //if it's a related component (ie. ids), fetchbyids
    //if it's a section component, fetchbysection w/ limit
    //if it's a section focused component, fetchbysection w/ limit & sort included
  }

  render() {
    //todo
    //small, medium or big size of icon:
    //if link = true
    //if focused = true: title bigger, buttons shown, titles fully shown, etc.?
    console.log(this.props)

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
        title: "More",
        href: "related",
      },
      more: {
        title: "More",
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

    // console.log("seeAll", this.props.seeAll)
    if (!this.props.seeAll) {
      if (this.props.focused || this.props.href === undefined || limit === filteredPages.length) {
        seeAll = ""
      }
    }
    console.log(filteredPages)

    const pages = filteredPages.map(function (link, i) {
      let href = `/${link.sectionIds[0]}/${link.pageId}`
      let detail = {
        title: sectionTitles[link.sectionIds[0]],
        href: `/${link.sectionIds[0]}`
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
            {console.log(href)}
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

const returnPagesByMore = createSelector(
  (state) => state.more,
  (state) => state.pages,
  (state, props) => props.sectionIds,
  (state, props) => props.currentIds,
  (more, pages, sectionIds, currentIds) => {
    //access 1 for each section and filter
    //if "default"
    //use default request
    //map through each
    //combine into array
    //return array
    const sectionId = sectionIds[0]
    const schema = defaultMoreSchema(sectionId)

    return Object.keys(schema)
      .reduce((arr, key) => {
      // console.log(more[key])
        let pageRefs = more[key]
          //find pages w/ the same sectionId
          .filter((id) => {
            if (id === currentIds.id) return
            return id.startsWith(sectionId)
          })
        arr = [...arr, ...pageRefs]
        return [ ...new Set(arr) ]
      }, [])
      .reduce((arr, key) => {
        arr = [...arr, pages[key]]
        return arr
      }, [])



    // const keys = Object.keys(schema)
    // //featured, most viewed, recent, etc.
    //   .reduce((arr, key) => {
    //     let a = Object.keys(more[key])
    //       //check for pages w/ sections === to the request
    //       .filter((key2) => {
    //         return key2.startsWith(sectionId)
    //       })
    //     arr = [...arr, ...a]
    //     return [ ...new Set(arr) ]
    //   }, [])
    //   .reduce((arr, key) => {
    //     arr = [...arr, more[key]]
    //   }, [])

    //filter here in future to remove duplicate of sections
    //JSON.stringify and check all values that aren't sectionIds

      // .reduce((arr, key) => {
      //   let a = Object.keys(more[key])
      //     .filter((key2) => {
      //       return key2.startsWith(sectionId)
      //     })
      //     .reduce((arr2, key2) => {
      //       arr2 = [...arr2, more[key][key2]]
      //       return arr2
      //     }, [])
      //   arr = [...arr, ...a]
      //   return arr
      // }, [])
    return keys
    // .filter((key) => {
    //   Object.keys(more[key]).filter((key2) => {
    //     if (key2.startsWith(sectionId))
    //       return more[key][key2].includes(more[key]._id)
    //     return
    //   })
    //   return more[key][sectionId].includes(more[key]._id)
    // })
    // .reduce((arr, key) => {
    //   return [...arr, ...more[key][sectionId]]
    // }, [])

    //old code
    // return Object.keys(schema).reduce((arr, key) => {
    //   // const count = schema[key].count - 1
    //   if (Object.keys(more[key]).length === 0)
    //     return [...arr]
    //   return [...arr, ...more[key][sectionId]]
    // }, [])
  }
)

const returnPagesBy_Id = createSelector(
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
  (pages, sectionId, filterId) => {

    const filters = {
      recent: {
        property: "date_published",
        reverse: false,
      },
      most_viewed: {
        property: "views",
        reverse: false,
      },
      featured: {
        property: "featured",
        reverse: true,
      },
    }

    if (!filters[filterId] || !Object.values(pages))
      return []

    let {property, reverse} = filters[filterId]

    return Object.values(pages)
      .filter(page => {
        if (!page.id.startsWith(sectionId))
          return false
        if (filterId === "featured" && !page.details.featured)
          return false
        return true
      })
      .sort(function (x, y) {
        //define a & b w/ access to a property in details
        //property is dynamically selected w/ props
        //if reverse, the values are flipped around

        let a = reverse ? x.details[property] : y.details[property]
        let b = reverse ? y.details[property] : x.details[property]

        switch (property) {
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
    case "_id":
      returnPages = returnPagesBy_Id(state.pages, ownProps)
      break;
    case "more":
      returnPages = returnPagesByMore(state.pages, ownProps)
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
export default connect(mapStateToProps,
  {fetchPagesByIds, fetchPagesByMore, fetchPagesBySection}
)(ComponentWithCSS);
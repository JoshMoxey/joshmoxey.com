import React from "react"
import Swiper from "react-id-swiper"
import CSSModules from "react-css-modules"
import styles from "./page-list.css"
import LinkPlus from "../LinkPlus/link-plus"
import {Link} from "react-router-dom"
import Ellipsis from "react-lines-ellipsis"

const PageList = (props) => {
  //todo
  //small, medium or big size of icon:
  //props.links validation
  //resize on window resize
  //if link = true
  //if focused = true: title bigger, buttons shown, titles fully shown, etc.?
  props.pages = [
    {
      href: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        href: "cat"
      }
    },
    {
      href: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        href: "cat"
      }
    },
    {
      href: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        href: "cat"
      }
    },
    {
      href: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        href: "cat"
      }
    },
    {
      href: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        href: "cat"
      }
    },
    {
      href: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        href: "cat"
      }
    }
  ]

  if (!props.pages) return "Please insert links"

  let limit = ""
  if (props.limit === false) {
    limit = props.pages.length
  } else if (props.limit === undefined) {
    limit = 6
    console.log("undefineddddd")
  } else {
    limit = props.limit
  }


  let title = ""
  if (!props.focused) {
    if (props.title === false) {
      title = ""
    } else if (props.title === undefined) {
      title = <h2>Pages</h2>
    } else {
      title = <h2>{props.title}</h2>
    }
  } else {
    if (props.title === false) {
      title = ""
    } else if (props.title === undefined) {
      title = <Link to={`/${props.href}`}><h2>Pages</h2></Link>
    } else {
      title = <Link to={`/${props.href}`}><h2>{props.title}</h2></Link>
    }
  }

  let seeAll = <Link to={`${props.href}`}>
    <span styleName="test">
      See All
    </span>
  </Link>

  if (props.focused || props.href === undefined ||  limit === props.pages.length) {
    seeAll = ""
  }

  const pages = props.pages.map(function (link, i) {
    if (i < limit) return (
      <div styleName="page" key={i}>
        <Link to={link.href} styleName="img-container">
          <img src={link.img} alt={link.title}/>
        </Link>
        <div styleName="text">
          <Link to={link.href} styleName="title">
            <Ellipsis
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

export default CSSModules(PageList, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
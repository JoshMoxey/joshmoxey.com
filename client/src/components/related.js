import React from "react"
import Swiper from "react-id-swiper"
import CSSModules from "react-css-modules"
import styles from "../../style/related.css"
import LinkPlus from "./LinkPlus/link-plus"
import {Link} from "react-router-dom"

const Related = (props) => {
  props.links = [
    {
      url: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        url: "cat"
      }
    },
    {
      url: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        url: "cat"
      }
    },
    {
      url: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        url: "cat"
      }
    },
    {
      url: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        url: "cat"
      }
    },
    {
      url: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        url: "cat"
      }
    },
    {
      url: "https://google.com",
      img: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/10/104275412-Gary_Vaynerchuk.1910x1000.jpg",
      title: "Title goes here and it's long as fuck ojaohibujijehibe enuije ejnei",
      detail: {
        text: "Category",
        url: "cat"
      }
    }
  ]

  const links = props.links.map((link, i) =>
    <div styleName="related-link" key={i}>
      <Link to={link.url} styleName="img-container">
        <img src={link.img} alt={link.title}/>
      </Link>
      <div styleName="text">
        <Link to={link.url} styleName="title">{link.title}</Link>
        <Link to={link.detail.url} styleName="category">{link.detail.text}</Link>
      </div>
    </div>
  )

  let title = ""
  switch (props.title) {
    case false:
      break;
    case undefined:
      title = <h2>Related</h2>
      break;
    default:
      title = <h2>{props.title}</h2>
  }

  return (
    <section>
      {title}
      <div styleName="related">
        {links}
      </div>
    </section>
  )
}

export default CSSModules(Related, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
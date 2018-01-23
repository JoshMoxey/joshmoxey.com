import React from "react"
import Swiper from "react-id-swiper"
import CSSModules from "react-css-modules"
import styles from "../../style/related.css"
import LinkPlus from "./link-plus"
import {Link} from "react-router-dom"

const Related = (props) => {
  props.links = [
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
  const links = props.links.map((link, i) =>
    <div styleName="related-link" key={i}>
      <Link to={link.href} styleName="img-container">
        <img src={link.img} alt={link.title}/>
      </Link>
      <div styleName="text">
        <Link to={link.href} styleName="title">{link.title}</Link>
        <Link to={link.detail.href} styleName="category">{link.detail.text}</Link>
      </div>
    </div>
  )

  return (
    <div styleName="related">
      {links}
    </div>
  )
}

export default CSSModules(Related, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
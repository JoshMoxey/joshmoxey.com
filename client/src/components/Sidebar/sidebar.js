import React from "react"
import CSSModules from "react-css-modules"
import styles from "./sidebar.css"

import Svg from "../../components/Svg/svg"
import LinkPlus from "../LinkPlus/link-plus";
import {Link} from "react-router-dom"

const Sidebar = (props) => {
  const hierarchy = [
    {
      title: "Home",
      icon: "home",
      href: "/",
      external: false,
      children: false
    },
    {
      title: "Work",
      icon: "work",
      href: "/work",
      children: [
        {
          title: "Services",
          icon: "",
          href: "/",
          children: false
        },
        {
          title: "Design",
          icon: "",
          href: "",
          children: false
        },
      ]
    },
    {
      title: "Content",
      icon: "content",
      href: "/content",
      children: [
        {
          title: "Podcast",
          icon: "",
          href: "/",
          children: false
        },
        {
          title: "Blog",
          icon: "",
          href: "",
          children: false
        },
        {
          title: "Articles",
          icon: "",
          href: "",
          children: false
        }
      ]
    },
  ]

  props.data = hierarchy

  const detail = (detail, i) => (
    <Link
      styleName="detail"
      key={i}
      to={detail.href}
    >
      <div styleName="icon">
        <Svg icon="googlePlay"/>
      </div>
      <div styleName="title">{detail.title}</div>
      {looper(detail.children)}
    </Link>
  )

  const looper = function (arr) {
    //loop through the array
    //if children.length
    //call the function but pass in children as the value
    if (arr.length) {
      return (
        <div styleName="container">
          {arr.map((d, i) => detail(d, i))}
        </div>
      )
    }
  }

  return (
    <div styleName="sidebar">
      <div styleName="header-1">
        <div styleName="img-container">
          <div styleName="img"></div>
        </div>
        <h2>Josh Moxey</h2>
      </div>
      <div styleName="header-2">
        <div styleName="img"></div>
        <h2>Josh Moxey</h2>
      </div>
      {looper(props.data)}
    </div>
  )
}

export default CSSModules(Sidebar, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
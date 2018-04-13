import React from "react"
import CSSModules from "react-css-modules"
import styles from "./nav-slider.css"
import Swiper from "react-id-swiper"
import {NavLink} from "react-router-dom"

const NavSlider = (props) => {
  console.log(props)
  props.details = [
    {
      title: "Home",
      href: ""
    },
    {
      title: "Recent",
      href: "/recent"
    },
    {
      title: "Most Viewed",
      href: "/most-viewed"
    },
  ]

  console.log(props.sectionId)

  const details = props.details.map((detail, i) =>
    <NavLink
      exact
      key={i}
      styleName="link"
      to={i === 0 ? `/${props.sectionId}` : `/${props.sectionId}${detail.href}`}
      activeStyle={{
        color: "#4a4a4a",
        fontWeight: 500,
        borderBottomWidth: "3px"
      }}
    >
      {console.log(detail.href)}
      {detail.title}
    </NavLink>
  )

  const params = {
    freeMode: true,
    slidesPerView: "auto",
  }

  return (
    <div styleName="nav-slider">
      <Swiper {...params}>{details}</Swiper>
    </div>
  )
}

export default CSSModules(NavSlider, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
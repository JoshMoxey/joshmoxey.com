import React from "react"
import CSSModules from "react-css-modules"
import styles from "./nav-slider.css"
import Swiper from "react-id-swiper"
import {NavLink} from "react-router-dom"

const NavSlider = (props) => {
  const sectionFilters = [
    {
      title: "Home",
      id: "home",
      href: "",
      important: true
    },
    {
      title: "Recent",
      id: "recent",
      href: "/recent"
    },
    {
      title: "Most Viewed",
      id: "most_viewed",
      href: "/most-viewed"
    },
    {
      title: "Featured",
      id: "featured",
      href: "/featured"
    },
  ].filter(filter => !props.hiddenFilters.includes(filter.id) || filter.important)
    .map((detail, i) =>
      <NavLink
        exact
        key={i}
        styleName="link"
        to={i === 0 ? `/${props.sectionId}` : `/${props.sectionId}${detail.href}`}
        activeStyle={{
          color: "#4a4a4a",
          fontWeight: 500,
          borderBottomWidth: "3px"
        }}>
        {detail.title}
      </NavLink>
    )

  const params = {
    freeMode: true,
    slidesPerView: "auto",
  }

  return (
    <div styleName="nav-slider">
      <Swiper {...params}>{sectionFilters}</Swiper>
    </div>
  )
}

export default CSSModules(NavSlider, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
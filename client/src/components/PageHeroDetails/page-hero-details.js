import React from "react"
import CSSModules from "react-css-modules"
import styles from "./page-hero-details.css"
import Swiper from "react-id-swiper"

const PageHeroDetails = (props) => {
  props.details = [
    {
      name: "Date recorded",
      value: "October 14th, 2017",
      priority: 1
    },
    {
      name: "Date published",
      value: "March 6th, 2018",
      priority: 1,
    },
    {
      name: "Episode",
      value: "Episode 001",
      priority: 1,
    },
    {
      name: "Episode",
      value: "Episode 001",
      priority: 1,
    },
    {
      name: "Episode",
      value: "Episode 001",
      priority: 1,
    },
    {
      name: "Episode",
      value: "Episode 001",
      priority: 1,
    },
  ]

  //date function w/ short form and then long form for date details
  //toggling when this should be long or short on size of screen
  //priority rendering
  //hide middle detail?

  const details = props.details.map((detail, i) =>
    <div styleName="detail" key={i}>
      <div styleName="name">{detail.name}</div>
      <div styleName="value">{detail.value}</div>
    </div>
  )


  const params = {
    freeMode: true,
    slidesPerView: "auto",
  }

  return (
    <div styleName={`details ${props.type}`} className="details">
      {
        props.type === "swiper" ?
        <Swiper {...params}>{details}</Swiper> :
        details
      }
    </div>
  )
}

export default CSSModules(PageHeroDetails, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
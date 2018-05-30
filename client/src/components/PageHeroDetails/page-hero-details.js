import React from "react"
import CSSModules from "react-css-modules"
import styles from "./page-hero-details.css"
import Swiper from "react-id-swiper"
import {dateFormatter, durationFormatter, episodeNumberFormatter} from "../../global/global";

const PageHeroDetails = (props) => {
  const idTitles = {
    date_published: "Date Published",
    date_recorded: "Date Recorded",
    dates_modified: "Dates Modified",
    date_last_modified: "Last Modified",
    episode: "Episode",
    duration: "Duration",
    age: "Age",
    location: "Location",
    birthday: "Birthday",
  }

  const detailsKeys = Object.keys(props.details)

  const details = Object.values(props.details).map(function (detail, i) {
    let key = detailsKeys[i]
    let title = idTitles[key]

    if (key.startsWith("date")) {
      detail = dateFormatter(detail)
    }

    if (key === "duration") {
      detail = durationFormatter(detail)
    }

    if (key === "episode") {
      detail = episodeNumberFormatter(detail)
    }

    if (key === "featured") {
      detail = "Featured"
      title = "Status"
    }

    if (
      key === "dates_modified" ||
      key === "views" ||
      !title
    ) return

    return (
      <div styleName="detail" key={i}>
        <div styleName="name">{title}</div>
        <div styleName="value">{detail}</div>
      </div>
    )
  })

  const params = {
    freeMode: true,
    slidesPerView: "auto",
  }

  return (
    <div styleName={`details ${props.type}`} className="details" style={props.style}>
      <Swiper {...params}>{details}</Swiper>
    </div>
  )
}

export default CSSModules(PageHeroDetails, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
import React from "react"
import CSSModules from "react-css-modules"
import styles from "./featured.css"
import Swiper from "react-id-swiper"
import LinkPlus from "../LinkPlus/link-plus";
import {Link} from "react-router-dom"
import Truncate from "react-truncate"
import Ellipsis from "react-lines-ellipsis"

const Featured = (props) => {

  props.slides = [
    {
      href: "/enuijokeene",
      external: false,
      background: {
        image: "",
        gradient: "45deg, orange, yellow",
        color: "#333"
      },
      title: "Josh Moxey Radio",
      context: ""
    },
    {
      href: "/enuijokeene",
      external: false,
      // background: "url(https://s3.amazonaws.com/gv2016wp/wp-content/uploads/20160114151754/The_AskGaryVee_Show_EP176.jpg)"
      background: {
        image: "http://dannykennedyfitness.com/wp-content/uploads/2017/05/151204-DailyVee_Episode_001_02_1920x1080.jpg",
        gradient: "",
        color: "#333"
      },
      title: "Why I started a podcast",
      context: "The Josh Moxey Show, Episode 0"
    },
    {
      href: "/enuijokeene",
      external: false,
      background: {
        image: "",
        gradient: "",
        color: "#333"
      },
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, aliquid aperiam asperiores assumenda consequuntur doloremque fuga fugiat hic ipsam iste labore libero maxime nisi nulla reiciendis tempore velit voluptatum.\n",
      context: "Lorem ipsum"
    },
  ]

  if (!props.slides)
    return <div></div>

  function additionalStyling (styles) {
    console.log(styles)
    const inlineStyles = {}
    if (styles.image) {
      inlineStyles.backgroundImage = `url("${styles.image}")`
    } else if (styles.gradient) {
      inlineStyles.background = `linear-gradient(${styles.gradient})`
    } else if (styles.color) {
      inlineStyles.backgroundColor = styles.color
    } else {
      inlineStyles.backgroundColor = "EEE"
    }
    return inlineStyles
  }

    const slides = props.slides.map((slide, i) =>
    <div
      key={i}
      styleName="featured-slide">
      <Link
        to={slide.href}
        external={slide.external}
        style={additionalStyling(slide.background)}
      >
        <div styleName="text">
          <span styleName="title">
          <Ellipsis
            text={slide.title}
            maxLine={3}
            ellipsis={"..."}
            lines={3}
            />
          {/*<Truncate lines={3}>*/}
          {/*{slide.title}*/}
          {/*</Truncate>*/}
          </span>
          <div styleName="subtitle">{slide.context}</div>
        </div>
      </Link>
    </div>
  )

  props.navigation = true

  const navigation = props.navigation ?
    { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    : {}

  const params = {
    navigation: navigation,
    spaceBetween: 12,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: false
  }

  return (
    <Swiper {...params}>
      {slides}
    </Swiper>
  )
}

export default CSSModules(Featured, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
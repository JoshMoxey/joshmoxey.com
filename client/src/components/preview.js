import React from "react"
import CSSModules from "react-css-modules"
import styles from "../../style/preview.css"
import Swiper from "react-id-swiper"

const Preview = (props) => {
  const slides = this.props.slides.map((slide, i) =>
    <Link key={i} to={slide.href} styleName="swiper-slide">
      {/*<img src={slide.img}/>*/}
      <div styleName="img-sim"></div>
      <div styleName="title">{slide.title}</div>
    </Link>
  )

  const navigation = this.props.navigation ?
    { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    : {}

  const params = {
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    navigation: navigation,
    spaceBetween: 20,
    width: 130,
    freeMode: true,
    // slidesPerView: 2
  }

  return (
    <Swiper {...params}>
      {slides}
    </Swiper>
  )
}

export default CSSModules(Preview, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
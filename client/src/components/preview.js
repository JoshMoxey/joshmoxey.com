import React from "react"
import CSSModules from "react-css-modules"
import styles from "../../style/preview.css"
import Swiper from "react-id-swiper"

const Preview = (props) => {
  const slides = props.slides.map((slide, i) =>
    <div
      key={i}
      to={slide.href}
      styleName="swiper-slide"
      // style={{height: "300px"}}
    >
      <img
        src={slide.img}
        style={{height: "100%"}}
        alt={slide.caption.map( text => ( text + " " )).toString()}
      />
    </div>
  )

  props.navigation = true

  const navigation = props.navigation ?
    { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
    : {}

  const params = {
    navigation: navigation,
    spaceBetween: 12,
    freeMode: true,
    slidesPerView: "auto",
  }

  return (
    <section styleName="preview">
      <h2 style={{marginLeft: "32px"}}>Preview</h2>
      <div styleName="fade"></div>
      <Swiper {...params}>
        {slides}
      </Swiper>
    </section>
  )
}

export default CSSModules(Preview, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
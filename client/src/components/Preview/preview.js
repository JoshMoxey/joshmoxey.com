import React from "react"
import CSSModules from "react-css-modules"
import styles from "./preview.css"
import Swiper from "react-id-swiper"

const Preview = (props) => {

  //onclick
  //export a click function
  //import ImagePopUp
  //setState of src
  //pass state up to ImagePopUp

  const slides = props.slides.map((slide, i) =>
    <div
      key={i}
      to={slide.href}
      styleName="swiper-slide"
    >
      <img
        src={slide.img}
        style={{height: "100%"}}
        alt={slide.caption.map( text => ( text + " " )).toString()}
        onClick={props.togglePopUp}
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


  let title = ""
  switch (props.title) {
    case false:
      break;
    case undefined:
      title = <h2>Preview</h2>
      break;
    default:
      title = <h2>{props.title}</h2>
  }

  return (
    <section styleName="preview">
      {title}
      {/*<h2 style={{marginLeft: "32px"}}>Preview</h2>*/}
      <div styleName="fade"></div>
      <Swiper {...params}>
        {slides}
      </Swiper>
    </section>
  )
}

export default CSSModules(Preview, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
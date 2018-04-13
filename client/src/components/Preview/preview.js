import React from "react"
import CSSModules from "react-css-modules"
import styles from "./preview.css"
import Swiper from "react-id-swiper"
import Svg from "../Svg/svg"
import {imgPathify} from "../../global/global";

const Preview = (props) => {
  //todo: add large option for height
  //make images bigger when screen gets wider

  //onclick
  //export a click function
  //import ImagePopUp
  //setState of src
  //pass state up to ImagePopUp

  // {
  //   img: "src",
  //     caption: [
  //     "caption here"
  //   ]
  // }


  if (!props || !props.slides) return ""

  const slides = props.slides.map((slide, i) =>
    <div
      key={i}
      //to={slide.href}
      styleName="swiper-slide"
    >
      <img
        src={imgPathify(slide.img)}
        style={{height: "100%"}}
        alt={slide.caption.map( text => ( text + " " )).toString()}
        onClick={props.togglePopUp}
      />
    </div>
  )

  const navigation = props.navigation ?
    { nextEl: '.swiper-arrow-next', prevEl: '.swiper-arrow-prev' } : {}

  const params = {
    navigation: navigation,
    spaceBetween: 12,
    freeMode: true,
    slidesPerView: "auto",
    renderCustomPrevButton: () => <div className="swiper-arrow-prev">
      <Svg icon="arrow circle left"></Svg>
      <Svg icon="arrow circle inner left"></Svg>
    </div>,
    renderCustomNextButton: () => <div className="swiper-arrow-next">
      <Svg icon="arrow circle right"></Svg>
      <Svg icon="arrow circle inner right"></Svg>
    </div>
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
    <section styleName="preview" className="preview">
      {title}
      <div styleName="fade"></div>
      <Swiper {...params}>
        {slides}
      </Swiper>
    </section>
  )
}

export default CSSModules(Preview, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
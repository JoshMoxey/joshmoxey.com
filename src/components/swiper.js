import React, {Component} from "react";
import CSSModules from "react-css-modules";
import {Link} from "react-router-dom";
import Container from "react-id-swiper";
import styles from "../../style/swiper.css"

class Swiper extends Component {
  render() {
    if (!this.props.slides) {
      return (<div>Swiper</div>)
    }
    
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
      <Container {...params}>
        {slides}
      </Container>
    )
  }
}

export default CSSModules(Swiper, styles)
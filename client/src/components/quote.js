import React from "react"
import CSSModules from "react-css-modules";
import styles from "../../style/quote.css"

const Quote = (props) => {
  return (
    <section styleName="quote">
      <div styleName="symbol">
        <div styleName="container">
          <svg viewBox="0 0 32 32">
            <path
              d="M19.495 1.659c-11.469 2.654-19.572 13.099-17.11 22.046 0.818 2.982 3.406 5.766 6.127 6.595 7.366 2.245 13.685-4.914 10.308-11.683-1.279-2.562-2.957-3.823-5.722-4.299l-0.723-0.125 0.048-0.406c0.509-4.299 2.503-7.119 7.17-10.135l0.903-0.583v-0.796c0-0.933 0.096-0.874-1.003-0.616z"></path>
          </svg>
          <svg viewBox="0 0 32 32">
            <path
              d="M19.495 1.659c-11.469 2.654-19.572 13.099-17.11 22.046 0.818 2.982 3.406 5.766 6.127 6.595 7.366 2.245 13.685-4.914 10.308-11.683-1.279-2.562-2.957-3.823-5.722-4.299l-0.723-0.125 0.048-0.406c0.509-4.299 2.503-7.119 7.17-10.135l0.903-0.583v-0.796c0-0.933 0.096-0.874-1.003-0.616z"></path>
          </svg>
        </div>
      </div>
      <div styleName="raw">I'm sick of the fronting and the bullshit in 2017.</div>
    </section>
  )
}

export default CSSModules(Quote, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
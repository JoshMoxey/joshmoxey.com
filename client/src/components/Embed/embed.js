import React from "react"

const Embed = (props) => {
  if (!props || !props.src) return ""

  return (
    <section>
      <iframe
        src={props.src}
        frameBorder="0"
        height="400px"
        scrolling="no"
        seamless
        width="100%">
      </iframe>
    </section>
  )
}

export default Embed
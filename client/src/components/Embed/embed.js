import React from "react"

const Embed = (props) => {
  if (!props.id || !props.src) return ""

  const simplecast =
    <iframe
      src={props.src}
      frameBorder="0"
      height="400px"
      scrolling="no"
      seamless
      width="100%">
    </iframe>

  const apple_music =
    <iframe
      src={props.src}
      height="500px"
      width="100%"
      frameborder="0">
    </iframe>

  return (
    <section>
      {[props.id]}
    </section>
  )

}

export default Embed
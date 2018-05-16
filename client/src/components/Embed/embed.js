import React from "react"

const Embed = (props) => {
  if (!props.id || !props.src) return ""

  const iframe = (id) => {
    switch (id) {
      case "simplecast":
        return <iframe
          src={props.src}
          frameBorder="0"
          height="400px"
          width="100%"
          scrolling="no"
          seamless>
        </iframe>
      case "apple_music":
        return <iframe
          src={props.src}
          frameborder="0"
          height="500px"
          width="100%">
        </iframe>
    }
  }

  return (
    <section>
      {iframe(props.id)}
    </section>
  )

}

export default Embed
import React from "react"

const Embed = (props) => {
  if (!props.embedId) return ""
  if (!props.src && !props.srcId) return ""
  //add function to access id from url
  //ie. detect type ie. starts with tools.applemusic...
  //based on that, select the substring amount
  //substring the id away from it, and return that

  // "https://tools.applemusic.com/embed/v1/playlist/pl.u-zPyLA2vudW4ePJ?country=ca",
  // applemusicid = "zPyLA2vudW4ePJ"
  // simplecastid = "b6b044af"

  const linkConverter = (embedId, srcId) => {
    switch (embedId) {
      case "simplecast":
        return `https://embed.simplecast.com/${srcId}?color=444444`
      case "apple_music":
        return `https://tools.applemusic.com/embed/v1/playlist/pl.u-${srcId}?country=ca`
    }
  }

  const src = props.srcId ? linkConverter(props.srcId) : props.src

  const iframe = (embedId) => {
    switch (embedId) {
      case "simplecast":
        return <iframe
          src={src}
          frameBorder="0"
          height="200px"
          width="100%"
          scrolling="no"
          seamless>
        </iframe>
      case "apple_music":
        return <iframe
          src={src}
          frameborder="0"
          height="500px"
          width="100%">
        </iframe>
    }
  }

  return (
    <section>
      {iframe(props.embedId)}
    </section>
  )

}

export default Embed
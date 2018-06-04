import React from "react"

const Embed = (props) => {
  console.log(props)
  if (!props.embedId) return ""
  if (!props.url && !props.urlId) return ""
  //add function to access id from url
  //ie. detect type ie. starts with tools.applemusic...
  //based on that, select the substring amount
  //substring the id away from it, and return that

  // "https://tools.applemusic.com/embed/v1/playlist/pl.u-zPyLA2vudW4ePJ?country=ca",
  // applemusicid = "zPyLA2vudW4ePJ"
  // simplecastid = "b6b044af"

  const embedLinkConverter = (embedId, urlId) => {
    switch (embedId) {
      case "simplecast":
        return `https://embed.simplecast.com/${urlId}?color=444444`
      case "apple_music":
        return `https://tools.applemusic.com/embed/v1/playlist/pl.u-${urlId}?country=ca`
    }
  }

  let {url} = props
  if (props.urlId) {
    url = embedLinkConverter(props.embedId, props.urlId)
  }

  console.log(props.embedId, props.urlId)

  const iframe = (embedId) => {
    switch (embedId) {
      case "simplecast":
        return <iframe
          src={url}
          frameBorder="0"
          height="200px"
          width="100%"
          scrolling="no"
          seamless>
        </iframe>
      case "apple_music":
        return <iframe
          src={url}
          frameBorder="0"
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
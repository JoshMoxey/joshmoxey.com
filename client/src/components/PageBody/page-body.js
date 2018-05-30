import React from "react"
import Podcast from "./Layouts/podcast"
import Radio from "./Layouts/radio"

const PageBody = (props) => {
  switch (props.type) {
    case "podcast":
      return <Podcast {...props}/>
    case "radio":
      return <Radio {...props} />
    case "gems":
      return <Gems {...props} />
    case "article":
      return <Article {...props} />
    default:
      return <div>Error, no page specified</div>
      break;
  }
}

export default PageBody
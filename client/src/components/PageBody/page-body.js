import React from "react"
import Podcast from "./Layouts/podcast"

const PageBody = (props) => {
  switch (props.type) {
    case "podcast":
      return <Podcast
        {...props}
      />
    case "radio":
      return <Radio/>
    case "gems":
      return <Gems/>
    case "article":
      return <Article/>
    default:
      return <div>Error, no page specified</div>
      //
      break;
  }
}

export default PageBody
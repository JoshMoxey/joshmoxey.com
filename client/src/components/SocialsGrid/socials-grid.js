import React from "react"
import CSSModules from "react-css-modules"
import styles from "./socials-grid.css"
import Svg from "../Svg/svg"
import {idify} from "../../global/global";

const SocialsGrid = (props) => {
  const data = [
    {
      id: "instagram",
      url: "https://instagram.com/joshmoxey",
    },
    {
      id: "facebook",
      url: "https://facebook.com/joshmoxey",
    },
    {
      id: "youtube",
      url: "https://www.youtube.com/channel/UCJl0a8GmK6yX6gB5QHTkZiw",
    },
    {
      id: "twitter",
      url: "https://twitter.com/joshmoxey",
    },
    {
      id: "podcast",
      url: "/podcast",
    },
  ]

  const links = data.map((link, i) =>
    <div
      key={i}
      styleName="link">
      <a href={link.url}>
        <div styleName="icon">
          <Svg icon={link.id}/>
        </div>
      </a>
    </div>
  )

  return (
    <section styleName="socials">
      {links}
    </section>
  )
}

export default CSSModules(SocialsGrid, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
import React from "react"
import CSSModules from "react-css-modules"
import styles from "./socials-grid.css"
import Svg from "../Svg/svg"

const SocialsGrid = (props) => {
  const data = [
    {
      title: "Facebook",
      href: "https://facebook.com/joshmoxey",
    },
    {
      title: "Instagram",
      href: "https://facebook.com/joshmoxey",
    },
    {
      title: "YouTube",
      href: "https://youtube.com/",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/joshmoxey",
    },
    {
      title: "Podcast",
      href: "https://twitter.com/joshmoxey",
    },
  ]

  const links = data.map((link, i) =>
    <div
      key={i}
      styleName="link">
      <a href={link.href}>
        <div styleName="icon">
          <Svg icon={link.title}/>
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
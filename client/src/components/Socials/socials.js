import React from "react"
import CSSModules from "react-css-modules"
import styles from "./socials.css"
import Svg from "../Svg/svg"
import {imgPathify} from "../../global/global";

const Socials = (props) => {
  const data = [
    {
      title: "Facebook",
      href: "https://facebook.com/joshmoxey",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore dolorum eligendi et, eum hic maiores obcaecati optio tempora voluptatem!",
    },
    {
      title: "Instagram",
      href: "https://facebook.com/joshmoxey",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam debitis deleniti ducimus eius est eum facilis hic, impedit laboriosam",
    },
    {
      title: "YouTube",
      href: "https://youtube.com",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis dolorem dolores velit voluptatum!"
    },
    {
      title: "",
      href: "",
      text: "",
    },
  ]

  const links = data.map((link, i) =>
    <div
      key={i}
      styleName="link">
      <a>
        <div styleName="icon">
          <Svg icon={link.title}/>
        </div>
        <div>
          <h2>{link.title}</h2>
          <p>{link.text}</p>
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

export default CSSModules(Socials, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
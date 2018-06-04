import React from "react"
import CSSModules from "react-css-modules"
import styles from "./footer.css"
import Svg from "../Svg/svg"
import LinkPlus from "../LinkPlus/link-plus";

const Footer = () => {
  const data = [
    {
      title: "Socials",
      links: [
        {
          title: "Instagram",
          url: "https://instagram.com/joshmoxey",
        },
        {
          title: "Facebook",
          url: "https://facebook.com/joshmoxey",
        },
        {
          title: "YouTube",
          url: "https://www.youtube.com/channel/UCJl0a8GmK6yX6gB5QHTkZiw",
        },
        {
          title: "Twitter",
          url: "https://twitter.com/joshmoxey",
        },
      ],
    },
    {
      title: "Sections",
      links: [
        {
          title: "Podcast",
          url: "/podcast",
        },
        {
          title: "Radio",
          url: "/radio",
        },
      ],
    },
    {
      title: "More",
      links: [
        {
          title: "Profile",
          url: "/profile",
        },
        // {
        //   title: "Socials",
        //   url: "/socials",
        // },
      ],
    },
  ]

  const link = (link, i) =>
    <li key={i}>
      <LinkPlus
        url={link.url}
      >
        {link.title}
      </LinkPlus>
    </li>

  const lists = data.map((lists, i) =>
    <ul
      key={i}
      className="unstyled"
    >
      <li>{lists.title}</li>
      {lists.links.map((data, i) => link(data, i))}
    </ul>
  )

  return (
    <footer>
      <div styleName="footer">
        {lists}
      </div>
    </footer>
  )
}

export default CSSModules(Footer, styles, {allowMultiple: true, handleNotFoundStyleName: "log"})
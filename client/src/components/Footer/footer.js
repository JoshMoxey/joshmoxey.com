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
          title: "Facebook",
          href: "https://facebook.com/joshmoxey",
          external: true
        },
        {
          title: "Instagram",
          href: "https://facebook.com/joshmoxey",
          external: true
        },
        {
          title: "Instagram",
          href: "https://facebook.com/joshmoxey",
          external: true
        },
      ],
    },
    {
      title: "Sections",
      links: [
        {
          title: "Podcast",
          href: "/podcast",
          external: false
        },
        {
          title: "Radio",
          href: "/radio",
          external: false
        },
      ],
    },
    {
      title: "More",
      links: [
        {
          title: "Profile",
          href: "/profile",
          external: false
        },
        {
          title: "Socials",
          href: "/socials",
          external: false
        },
      ],
    },
  ]

  const link = (link, i) =>
    <li key={i}>
      <LinkPlus
        to={link.href}
        external={link.external}
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
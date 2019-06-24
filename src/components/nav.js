import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "react-scroll"
import cn from "classnames"
import styles from "./nav.module.css"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson(filter: { title: { eq: "Links" } }) {
            edges {
              node {
                title
                detail {
                  name
                  icon
                  url
                }
              }
            }
          }
        }
      `}
      render={data => {
        const links = data.allDataJson.edges[0].node.detail
        const socialLinks = links.map((link, index) => {
          const { name, icon, url } = link
          return (
            <li className={styles.item} key={`social-${index}`}>
              <a href={url}>
                <img className={styles.icon} src={icon} alt={name} />
              </a>
            </li>
          )
        })

        return (
          <nav className={cn(styles.nav, { [styles.open]: open })}>
            <div
              className={styles.expandContainer}
              onClick={() => setOpen(!open)}
            >
              <div className={cn(styles.expand, { [styles.open]: open })} />
            </div>
            <ul className={styles.items}>
              <li className={styles.item} key="about">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className={styles.item} key="work">
                <Link to="work" smooth={true} duration={500}>
                  Work
                </Link>
              </li>
              <li className={styles.item} key="projects">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li className={styles.item} key="skills">
                <Link to="skills" smooth={true} duration={500} offset={-40}>
                  Skills
                </Link>
              </li>
              <li className={styles.item} key="music">
                <Link to="music" smooth={true} duration={500}>
                  Music
                </Link>
              </li>
              {socialLinks}
            </ul>
          </nav>
        )
      }}
    />
  )
}

export default Nav

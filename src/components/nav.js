import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./nav.module.css"

const Nav = () => (
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
      const linksDetail = links.map((link, index) => {
        const { name, icon, url } = link
        return (
          <li className={styles.item}>
            <a href={url}>
              <img className={styles.icon} src={icon} alt={name} />
            </a>
          </li>
        )
      })

      return (
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <a href="#about">About</a>
            </li>
            <li className={styles.item}>
              <a>Work</a>
            </li>
            <li className={styles.item}>
              <a>Projects</a>
            </li>
            <li className={styles.item}>
              <a>Skills</a>
            </li>
            {linksDetail}
          </ul>
        </nav>
      )
    }}
  />
)

export default Nav

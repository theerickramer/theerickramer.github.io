import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "react-scroll"
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
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="work" smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="projects" smooth={true} duration={500} offset={-20}>
                Projects
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="skills" smooth={true} duration={500} offset={-40}>
                Skills
              </Link>
            </li>
            {linksDetail}
          </ul>
        </nav>
      )
    }}
  />
)

export default Nav

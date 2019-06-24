import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      const { title, description } = data.site.siteMetadata;
      return (
        <header className={styles.header}>
          <video
            id="background-vid"
            src="/images/clouds.mov"
            poster="/images/clouds.png"
            loop
            autoPlay
            muted
          />
          <div className="gradient" />
          <div className="vignette" />
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.description}>{description}</h2>
        </header>
      )
    }}
  />
)

export default Header

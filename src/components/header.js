import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
        <header>
          <video
            id="background-vid"
            src="clouds-timelapse.mp4"
            loop
            autoPlay
            muted
          />
          <div className="gradient" />
          <div className="vignette" />
          <h1>{title}</h1>
          <h2>{description}</h2>
        </header>
      )
    }}
  />
)

export default Header

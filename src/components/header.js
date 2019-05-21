import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        allDataJson {
          edges {
            node {
              header {
                title
                description
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { title, description } = data.allDataJson.edges[0].node.header;
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

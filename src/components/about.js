import React from "react"
import { StaticQuery, graphql } from "gatsby"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: { title: { eq: "About" } }) {
          edges {
            node {
              title
              description
            }
          }
        }
      }
    `}
    render={data => {
      const { title, description } = data.allDataJson.edges[0].node
      return (
        <section>
          <h2>[ {title} ]</h2>
          <p>{description}</p>
        </section>
      )
    }}
  />
)

export default About

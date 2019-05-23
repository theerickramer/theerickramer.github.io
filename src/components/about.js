import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"

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
        <Element name="about">
          <section>
            <h2>[ {title} ]</h2>
            <p>{description}</p>
          </section>
        </Element>
      )
    }}
  />
)

export default About

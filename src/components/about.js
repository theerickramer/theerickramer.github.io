import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import ScrollAnimation from "react-animate-on-scroll"

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
            <ScrollAnimation animateOnce={true} animateIn="zoomIn">
              <h2>[ {title} ]</h2>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" delay={250}>
              <img className="faceball" src="images/me.jpg" />
              <p>{description}</p>
            </ScrollAnimation>
          </section>
        </Element>
      )
    }}
  />
)

export default About

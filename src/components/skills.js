import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./skills.module.css"

const Skills = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: { title: { eq: "Skills" } }) {
          edges {
            node {
              title
              detail {
                name
                logo
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { title, detail: skills } = data.allDataJson.edges[0].node
      const skillsDetail = skills.map((skill, index) => {
        const { url, logo, name, description } = skill
        return (
          <li className={styles.skill} key={index}>
            <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img className={styles.logo} src={logo} alt={name} />
                <p>{description}</p>
              </a>
            </ScrollAnimation>
          </li>
        )
      })
      return (
        <Element name="skills">
          <section>
            <ScrollAnimation animateOnce={true} animateIn="zoomIn">
              <h2>[ {title} ]</h2>
            </ScrollAnimation>
            <ul className="responsive-grid-container">{skillsDetail}</ul>
          </section>
        </Element>
      )
    }}
  />
)

export default Skills

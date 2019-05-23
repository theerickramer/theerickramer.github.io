import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import styles from "./skills.module.css"

const Work = () => (
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
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img className={styles.logo} src={logo} alt={name} />
              <p>{description}</p>
            </a>
          </li>
        )
      })
      return (
        <Element name="skills">
          <section>
            <h2>[ {title} ]</h2>
            <ul className="responsive-grid-container">{skillsDetail}</ul>
          </section>
        </Element>
      )
    }}
  />
)

export default Work

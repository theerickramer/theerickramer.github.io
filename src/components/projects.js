import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import styles from "./projects.module.css"

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: { title: { eq: "Projects" } }) {
          edges {
            node {
              title
              detail {
                name
                description
                image
                url
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { title, detail: projects } = data.allDataJson.edges[0].node
      const projectsDetail = projects.map((project, index) => {
        const { url, image, name, description } = project
        return (
          <li className={styles.project} key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img className={styles.image} src={image} alt={name} />
              <p>{description}</p>
            </a>
          </li>
        )
      })
      return (
        <Element name="projects">
          <section>
            <h2>[ {title} ]</h2>
            <ul className="responsive-grid-container">{projectsDetail}</ul>
          </section>
        </Element>
      )
    }}
  />
)

export default Projects

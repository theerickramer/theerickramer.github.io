import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import ScrollAnimation from "react-animate-on-scroll"
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
          <ScrollAnimation animateOnce={true} animateIn="fadeInUp">
            <li className={styles.project} key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src={image} alt={name} />
                <p>{description}</p>
              </a>
            </li>
          </ScrollAnimation>
        )
      })
      return (
        <Element name="projects">
          <section>
            <ScrollAnimation animateOnce={true} animateIn="zoomIn" >
              <h2>[ {title} ]</h2>
            </ScrollAnimation>
            <ul className="responsive-grid-container">{projectsDetail}</ul>
          </section>
        </Element>
      )
    }}
  />
)

export default Projects

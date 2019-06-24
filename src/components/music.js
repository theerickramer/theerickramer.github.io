import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./projects.module.css"

const Music = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: { title: { eq: "Music" } }) {
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
          <ScrollAnimation animateOnce={true} animateIn="fadeInUp" key={index}>
            <li className={styles.project}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img className={styles.image} src={image} alt={name} />
                <p>
                  {name} ({description})
                </p>
              </a>
            </li>
          </ScrollAnimation>
        )
      })
      return (
        <Element name="music">
          <section>
            <ScrollAnimation animateOnce={true} animateIn="zoomIn">
              <h2>[ {title} ]</h2>
            </ScrollAnimation>
            <ul className="responsive-grid-container">{projectsDetail}</ul>
          </section>
        </Element>
      )
    }}
  />
)

export default Music

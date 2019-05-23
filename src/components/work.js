import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Element } from "react-scroll"
import styles from "./work.module.css"

const Work = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: { title: { eq: "Work" } }) {
          edges {
            node {
              title
              detail {
                name
                description
                logo
                url
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { title, detail: jobs } = data.allDataJson.edges[0].node
      const workDetail = jobs.map((job, index) => {
        const { url, logo, name, description } = job
        return (
          <li className={styles.job} key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img className={styles.logo} src={logo} alt={name} />
              <p>{description}</p>
            </a>
          </li>
        )
      })
      return (
        <Element name="work">
          <section>
            <h2>[ {title} ]</h2>
            <ul className="responsive-grid-container">{workDetail}</ul>
          </section>
        </Element>
      )
    }}
  />
)

export default Work

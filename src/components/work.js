import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
            <a href={url}>
              <img className={styles.logo} src={logo} alt={name} />
              <p>{description}</p>
            </a>
          </li>
        )
      })
      return (
        <section>
          <h2>[ {title} ]</h2>
          <ul>{workDetail}</ul>
        </section>
      )
    }}
  />
)

export default Work

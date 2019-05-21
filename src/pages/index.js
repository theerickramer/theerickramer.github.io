import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = ({ data }) => {
  const [about, work, projects, skills] = data.allDataJson.edges[0].node.main.sections
  return (
    <Layout>
      <SEO title="Eric Kramer" keywords={[`Eric Kramer`]} />
      <About {...about} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          main {
            sections {
              title
              description
            }
          }
        }
      }
    }
  }
`
export default IndexPage

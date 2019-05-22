import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = () => (
    <Layout>
      <SEO title="Eric Kramer" keywords={[`Eric Kramer`]} />
      <About />
    </Layout>
  )
  
export default IndexPage

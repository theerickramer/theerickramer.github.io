import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"
import Work from "../components/work"
import Projects from "../components/projects"

const IndexPage = () => (
    <Layout>
      <SEO title="Eric Kramer" keywords={[`Eric Kramer`]} />
      <About />
      <Work />
      <Projects />
    </Layout>
  )

export default IndexPage

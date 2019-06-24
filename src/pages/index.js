import React from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import About from "../components/about"
import Work from "../components/work"
import Music from "../components/music"
import Projects from "../components/projects"
import Skills from "../components/skills"
import "animate.css/animate.min.css"

const IndexPage = () => (
    <Layout>
      <SEO title="Eric Kramer" keywords={[`Eric Kramer`]} />
      <Nav />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Music />
    </Layout>
  )

export default IndexPage

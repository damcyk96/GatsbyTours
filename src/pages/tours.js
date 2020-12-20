import React from "react"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Tours from "../components/Tours/Tours"

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export default tours

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4096) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    blogHeroImage: file(relativePath: { eq: "blogHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero opacity="true" img={data.blogHeroImage.childImageSharp.fluid}>
        <Banner
          className="banner"
          title="Traveler Official Blog"
          info="Our Latest Tales and Trails"
        ></Banner>
      </StyledHero>
    </Layout>
  )
}

export default blog

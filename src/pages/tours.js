import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" description="Tours page" />
      <StyledHero
        opacity="true"
        img={data.toursHeroImage.childImageSharp.fluid}
      >
        <Banner
          className="banner"
          title="Epic
          Adventure
          Tours"
          info="Your adventure starts here"
        ></Banner>
      </StyledHero>
      <Tours />
    </Layout>
  )
}

export const query = graphql`
  query {
    toursHeroImage: file(relativePath: { eq: "toursHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours

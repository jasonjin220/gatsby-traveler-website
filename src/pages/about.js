import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import AboutTraveler from "../components/AboutTraveler/AboutTraveler"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
  query {
    aboutHeroImage: file(relativePath: { eq: "aboutHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" description="About page" />
      <StyledHero
        opacity="true"
        img={data.aboutHeroImage.childImageSharp.fluid}
      >
        <Banner
          className="banner"
          title="About Us"
          info="We connect people to life-enriching travel experiences"
        ></Banner>
      </StyledHero>
      <AboutTraveler />
    </Layout>
  )
}

export default about

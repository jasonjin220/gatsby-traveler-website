import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import Form from "../components/Form/Form"
import PopularTours from "../components/PopularTours/PopularTours"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
  query {
    contactHeroImage: file(relativePath: { eq: "contactHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Get In Touch" />
      <StyledHero
        opacity="true"
        img={data.contactHeroImage.childImageSharp.fluid}
      >
        <Banner className="banner" title="Get In Touch"></Banner>
      </StyledHero>
      <Form />
      <PopularTours />
    </Layout>
  )
}

export default contact

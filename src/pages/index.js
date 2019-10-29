import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
// import Hero from "../components/Hero/Hero"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import WhyUs from "../components/WhyUs/WhyUs"
import BestTours from "../components/BestTours/BestTours"
import Services from "../components/Services/Services"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero
      home="true"
      opacity="true"
      img={data.homeHeroImage.childImageSharp.fluid}
    >
      <Banner
        className="banner"
        title="find your way"
        info="The world is a book and those who do not travel read only one page."
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </StyledHero>
    <WhyUs />
    <BestTours />
    <Services />
  </Layout>
)

export const query = graphql`
  query {
    homeHeroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

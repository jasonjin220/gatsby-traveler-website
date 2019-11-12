import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import WhyUs from "../components/WhyUs/WhyUs"
import HomeBanner from "../components/HomeBanner/HomeBanner"
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
        <AniLink fade to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <HomeBanner />
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

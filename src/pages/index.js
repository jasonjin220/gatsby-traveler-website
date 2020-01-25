import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import WhyUs from "../components/WhyUs/WhyUs"
import HomeBanner from "../components/HomeBanner/HomeBanner"
import PopularTours from "../components/PopularTours/PopularTours"
import Services from "../components/Services/Services"
import LatestPosts from "../components/LatestPosts/LatestPosts"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="home page" />
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
    <PopularTours />
    <Services />
    <LatestPosts />
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

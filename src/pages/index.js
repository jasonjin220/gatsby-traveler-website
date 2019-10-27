import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import WhyUs from "../components/WhyUs/WhyUs"

export default () => (
  <Layout>
    <Hero>
      <Banner
        className="banner"
        title="find your way"
        info="The world is a book and those who do not travel read only one page."
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </Hero>
    <WhyUs />
  </Layout>
)

import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./homeBanner.scss"

const getImage = graphql`
  query homeBanner {
    homeBanner: file(relativePath: { eq: "homebanner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const HomeBanner = () => {
  const { homeBanner } = useStaticQuery(getImage)

  return (
    <div className="container">
      <div className="home-banner">
        <div className="home-banner__text-box">
          <h2 className="home-banner__heading">
            Flash-pack your way around the world.
          </h2>
          <div className="home-banner__text">
            We have hunted out all the very best spots to give you the most epic
            small group experience, allowing you to sit back and take in all
            that these places have to offer from the comfort of our new, luxury
            cruisers. We jam-pack our tours full of adventure, like-minded
            humans between the ages of 18 and 35 years and local guides who’ll
            show you all of the best on and off-the-beaten-track places.
          </div>
        </div>
        <Image
          className="home-banner__img"
          fluid={homeBanner.childImageSharp.fluid}
          alt="home banner-hero"
        />
      </div>
    </div>
  )
}

export default HomeBanner

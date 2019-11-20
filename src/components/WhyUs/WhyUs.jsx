import React from "react"
import Title from "../Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./whyus.scss"

const getImages = graphql`
  query images {
    img1: file(relativePath: { eq: "whyus/traveler.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "whyus/guide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "whyus/groups.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img4: file(relativePath: { eq: "whyus/scenery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const WhyUs = () => {
  const images = useStaticQuery(getImages)
  const { img1, img2, img3, img4 } = images

  return (
    <div className="container">
      <section className="whyus">
        <Title title="Why choose " subtitle="Traveler?" />

        <div className="whyus__wrapper">
          <div className="whyus-card">
            <figure>
              <Image
                fluid={img1.childImageSharp.fluid}
                className="whyus-card__img"
                alt="whyus card"
              />
            </figure>
            <div className="whyus-card__content">
              <h2 className="whyus-card__title">Our Vehicles</h2>
              <p className="whyus-card__text">
                Travel in style with our fleet of luxury vehicles, complete with
                USB chargers, WIFI and comfy seats.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <figure>
              <Image
                fluid={img2.childImageSharp.fluid}
                className="whyus-card__img"
                alt="whyus card"
              />
            </figure>
            <div className="whyus-card__content">
              <h2 className="whyus-card__title">Local Guides</h2>
              <p className="whyus-card__text">
                Explore local spots with our guides who are passionate about
                showing you their backyard.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <figure>
              <Image
                fluid={img3.childImageSharp.fluid}
                className="whyus-card__img"
                alt="whyus card"
              />
            </figure>
            <div className="whyus-card__content">
              <h2 className="whyus-card__title">Small Groups</h2>
              <p className="whyus-card__text">
                With a maximum group size of 18, you are bound to bond with your
                travel family.
              </p>
            </div>
          </div>
          <div className="whyus-card">
            <figure>
              <Image
                fluid={img4.childImageSharp.fluid}
                className="whyus-card__img"
                alt="whyus card"
              />
            </figure>
            <div className="whyus-card__content">
              <h2 className="whyus-card__title">
                <span class="short-text">Stunning </span>Scenery
              </h2>
              <p className="whyus-card__text">
                Natural backdrops include pristine beaches, jagged cliffs,
                mountain ranges and crystal clear lakes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs

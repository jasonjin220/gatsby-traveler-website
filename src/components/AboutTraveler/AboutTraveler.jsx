import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./aboutTraveler.scss"

const getImages = graphql`
  query aboutImages {
    img1: file(relativePath: { eq: "about/adventure.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "about/unforgettable.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "about/guide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "about/group.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "about/peace.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const AboutSection = () => {
  const aboutImages = useStaticQuery(getImages)
  const { img1, img2, img3, img4, img5 } = aboutImages
  return (
    <div className="container">
      <div className="about-container">
        <section className="about-section">
          <figure className="experts-image">
            <Image
              fluid={img1.childImageSharp.fluid}
              className="about-section__image"
              alt="about"
            />
          </figure>
          <div className="about-section__content experts-content">
            <h2 className="title">The adventure travel experts</h2>
            <p className="text">
              Since launching in 2016 with only six tours in a four-page
              brochure, Traveller has grown to offer over 200 trips; from
              classic ‘discovery’ group tours, solo traveller holidays and
              active family adventures, to walking holidays, cycling trips and
              even self-guided options. Choose from over 120 countries and
              explore cultures, landscapes, wildlife and communities from Asia
              to Africa, the Arctic to the Americas. Read on to find out why
              people travel with us again and again.
            </p>
          </div>
        </section>
        <section className="about-section">
          <div className="about-section__content">
            <h2 className="title">Unforgettable experiences</h2>
            <p className="text">
              On our trips you'll see a mix of famous sights and hidden gems
              that others miss, or don't even know about. As travellers, we want
              to experience a country, not merely observe it. We'll take you
              closer to the country, its culture and people, often in
              unscripted, spontaneous, impossible-to-replicate ways. You'll come
              home having seen and experienced the country in a way that other
              travellers might never have.
            </p>
          </div>
          <figure>
            <Image
              fluid={img2.childImageSharp.fluid}
              className="about-section__image"
              alt="about"
            />{" "}
          </figure>
        </section>
        <section className="about-section">
          <figure className="guides-image">
            <Image
              fluid={img3.childImageSharp.fluid}
              className="about-section__image"
              alt="about"
            />{" "}
          </figure>
          <div className="about-section__content guides-content">
            <h2 className="title">Expert local guides</h2>
            <p className="text">
              As your resident expert, your guide (or tour leader) will use
              their insider knowledge and local connections to make the most of
              unexpected opportunities. You might be invited to watch the
              sunrise from a lighthouse or to join family Diwali celebrations.
              They'll be on hand to make sure your trip goes smoothly, taking
              care of logstics. Our tour leaders are all hand-picked and trained
              by our experienced team to ensure consistently high standards.
            </p>
          </div>
        </section>
        <section className="about-section">
          <div className="about-section__content groups-content">
            <h2 className="title">Small groups</h2>
            <p className="text">
              Our average group size is just 12; big enough to meet like-minded
              people but small enough to get to the heart of a destination. All
              sorts of people travel on our trips; groups are usually a mix of
              solos, couples and friends. What unites everyone is an adventurous
              spirit, sense of fun and a desire for real travel experiences.
              Call us to learn more about the group already booked on a
              particular trip (age range, solos vs couples etc).
            </p>
          </div>
          <figure className="groups-image">
            <Image
              fluid={img4.childImageSharp.fluid}
              className="about-section__image"
              alt="about"
            />{" "}
          </figure>
        </section>
        <section className="about-section">
          <figure className="peace-image">
            <Image
              fluid={img5.childImageSharp.fluid}
              className="about-section__image"
              alt="about"
            />{" "}
          </figure>
          <div className="about-section__content peace-content">
            <h2 className="title">Peace of mind</h2>
            <p className="text">
              If you're worried your trip will be too full on or too relaxed,
              you needn't be. All our trips are graded by pace (or 'grade' for
              Walking and Cycling trips). Similarly, our accommodation is graded
              from simple to premium. Just choose a trip that's right for you
              and we'll look after the rest. Your tour leader is supported by a
              wider team back at HQ, ensuring everything runs smoothly; we take
              care of the logistics so you don't have to. All you have to do is
              enjoy your adventure.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutSection

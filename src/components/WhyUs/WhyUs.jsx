import React from "react"
import Title from "../Title/Title"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./whyus.scss"

const getImage = graphql`
  query whyusImage {
    whyusImage: file(relativePath: { eq: "whyus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const WhyUs = () => {
  const { whyusImage } = useStaticQuery(getImage)

  return (
    <section className="whyus">
      <Title title="Why choose " subtitle="Traveler?" />
      <CenteredDiv>
        <article className="whyus__img">
          <div className="whyus__img-container">
            <Img fluid={whyusImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className="whyus__info">
          <p className="whyus__info-text">
            We believe in doing more than just visiting a place, we believe in
            really getting out there and having an adventure. It's not just
            about where you go, it's how you experience it.
          </p>
          <p className="whyus__info-text">
            Travelling can teach you more than any university course. You learn
            about the culture of the country you visit. If you talk to locals,
            you will likely learn about their thinking, habits, traditions and
            history as well.
          </p>
          <p className="whyus__info-text">
            You will realise how you really feel about foreign people.You will
            be able to observe how you react in completely new situations. You
            will test your language, orientational and social skills. You will
            not be the same person after returning home.
          </p>
          <Link to="/about">
            <button type="button" className="btn-primary">
              Read More
            </button>
          </Link>
        </article>
      </CenteredDiv>
    </section>
  )
}

const CenteredDiv = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    margin-top: 3rem;
  }

  @media screen and (min-width: 1200px) {
    width: 95vw;
    max-width: 1170px;
  }
`

export default WhyUs

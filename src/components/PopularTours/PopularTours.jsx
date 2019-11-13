import React from "react"
import Title from "../Title/Title"
import Card from "../Card/Card"
import { useStaticQuery, graphql } from "gatsby"

import "./popularTours.scss"

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulFeaturedTour {
      edges {
        node {
          title
          days
          price
          slug
          departure
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const PopularTours = () => {
  const response = useStaticQuery(getFeaturedTours)
  const featuredTours = response.featuredTours.edges

  return (
    <div className="popular-tours-wrapper">
      <Title title="Popular" subtitle=" tours" />

      <div className="container">
        <section className="popular-tours">
          {featuredTours.map(({ node }) => (
            <Card
              key={node.contentful_id}
              imgSrc={node.images}
              title={node.title}
              slug={node.slug}
              price={node.price}
              days={node.days}
              departure={node.departure}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default PopularTours

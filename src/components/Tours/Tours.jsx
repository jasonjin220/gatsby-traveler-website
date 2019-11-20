import React from "react"
import Title from "../Title/Title"
import Tour from "../Tour/Tour"
import { useStaticQuery, graphql } from "gatsby"

import "./tours.scss"

const getTours = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
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

const Tours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.tours.edges

  return (
    <div className="tours-wrapper">
      <Title title="Choose your dream tour" />
      <div className="container">
        <section className="tours">
          {tours.map(({ node }) => (
            <Tour key={node.contentful_id} tour={node} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Tours

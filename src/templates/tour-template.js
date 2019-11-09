import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import TourBanner from "../components/TourBanner/TourBanner"

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    hightlights,
  } = data.tour
  return (
    <Layout>
      <TourBanner images={images} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      days
      start(formatString: "dddd MMMM Do, YYYY")
      country
      description {
        description
      }
      itinerary {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      highlights {
        info
      }
    }
  }
`

export default TourTemplate

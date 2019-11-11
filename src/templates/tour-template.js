import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import TourBanner from "../components/TourBanner/TourBanner"
import TourDetails from "../components/TourDetails/TourDetails"

const TourTemplate = ({ data }) => {
  console.log(data)
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    highlights,
    itinerary,
  } = data.tour
  return (
    <Layout>
      <TourBanner images={images} />
      <TourDetails
        name={name}
        description={description}
        days={days}
        price={price}
        highlights={highlights}
      />
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
        fluid {
          ...GatsbyContentfulFluid
        }
        title
        description
      }
    }
  }
`

export default TourTemplate

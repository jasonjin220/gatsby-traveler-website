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
    departure,
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
        departure={departure}
        itinerary={itinerary}
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
      departure
      country
      description {
        description
      }
      itinerary {
        day
        info
        title
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

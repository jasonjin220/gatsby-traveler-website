import React from "react"
import "./tour.scss"
import TourCard from "../TourCard/TourCard"

const Tour = ({ tour }) => {
  const { name, price, days, slug, images } = tour
  let mainImage = images[0].fluid

  return (
    <article>
      <TourCard
        name={name}
        price={price}
        days={days}
        image={mainImage}
        slug={slug}
      />
    </article>
  )
}

export default Tour

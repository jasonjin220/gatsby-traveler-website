import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"

import "./tourCard.scss"

const TourCard = ({ name, price, slug, days, image }) => {
  return (
    <div className="tour-card">
      <AniLink to={`/tours/${slug}`}>
        <figure className="tour-card__img-wrapper">
          <Image fluid={image} className="tour-card__img" alt="tour" />
          <figcaption className="tour-card__duration">
            <span className="tour-card__duration-days">{days}</span>
            <span className="tour-card__duration-text">days</span>
          </figcaption>
        </figure>
      </AniLink>
      <h3 className="tour-card__name">{name}</h3>
      <div className="tour-card__price-offer">
        From &pound;<span>{price}</span>
      </div>
      <AniLink to={`/tours/${slug}`}>
        <div className="tour-card__btn-wrapper">
          <button type="button" className="btn-primary tour-card__btn">
            View Tour
          </button>
        </div>
      </AniLink>
    </div>
  )
}

export default TourCard

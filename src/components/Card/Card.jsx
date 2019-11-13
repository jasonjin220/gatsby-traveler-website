import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./card.scss"

const Card = ({ title, imgSrc, slug, price, days, departure }) => {
  console.log(imgSrc)
  return (
    <AniLink fade to={`/tours/${slug}`} className="card">
      <figure className="card__img-wrapper">
        <Image fluid={imgSrc.fluid} alt="featured tour" className="card__img" />
        <figcaption className="card__duration">
          <span className="card__duration-days">{days}</span>
          <span className="card__duration-text">days</span>
        </figcaption>
      </figure>
      <h2 className="card__title">{title}</h2>
      <p className="card__departure">Departs {departure}</p>
      <p className="card__price">From &pound;{price} GBP</p>
    </AniLink>
  )
}

export default Card

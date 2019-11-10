import React from "react"
import "./tourDetails.scss"
import map from "../../images/europe.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const TourDetails = ({ name, description, days, price }) => {
  return (
    <section className="tour-section">
      <div className="tour-section__details">
        <h2 className="tour-section__details__name">{name}</h2>
        <p className="tour-section__details__text">{description}</p>
      </div>
      <div className="tour-section__trip-box">
        <div className="trip-box">
          <figure className="trip-box__figure">
            <img className="trip-box__image" src={map} alt="europe map" />
            <figcaption className="trip-box__duration">
              <span className="trip-box__duration-days">{days}</span>
              <span className="trip-box__duration-text">days</span>
            </figcaption>
          </figure>
          <h2 className="trip-box__title">{name}</h2>
          <h5 className="trip-box__subtitle">Departs Calgary</h5>
          <div className="trip-box__info">
            <div className="trip-box__days">
              <span className="title">Days</span>
              <span className="subtitle">{days}</span>
            </div>
            <div className="trip-box__price">
              <span className="title">Price From</span>
              <span className="subtitle">&pound;{price} GBP</span>
            </div>
            <div className="trip-box__per-day">
              <span className="title">Per Day</span>
              <span className="subtitle">&pound;125 GBP</span>
            </div>
          </div>
          <div className="trip-box__availability">
            <AniLink fade to="/tours">
              Check Availability
            </AniLink>
          </div>
          <p className="trip-box__hot-text">
            This tour is getting a lot of attention. It’s been viewed 500+ time
            in the past week.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TourDetails

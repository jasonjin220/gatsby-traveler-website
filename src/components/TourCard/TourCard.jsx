import React from "react"

import "./tourCard.scss"

const TourCard = ({ imgSrc, price }) => {
  return (
    <div className="tour-card">
      <div className="tour-card__img-wrapper">
        <img src={imgSrc} className="tour-card__img" />
      </div>
      <h3 className="tour-card__info">New Zeeland for Solo Travellers</h3>
      <div className="tour-card__price-offer">
        16 days starting from &pound;<span>{price}</span>
      </div>
    </div>
  )
}

export default TourCard

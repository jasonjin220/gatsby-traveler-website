import React from "react"

import "./card.scss"

const Card = ({ place, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="country" className="card__img" />

      <h5 className="card__place">{place}</h5>
      <button className="btn-white card__btn">See More</button>
    </div>
  )
}

export default Card

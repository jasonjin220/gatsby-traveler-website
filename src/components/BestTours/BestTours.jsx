import React from "react"
import Title from "../Title/Title"
import Card from "../Card/Card"

import canada from "../../images/cards/canada.jpg"
import bahamas from "../../images/cards/bahamas.jpg"
import venice from "../../images/cards/venice.jpg"

import "./bestTours.scss"

const BestTours = () => {
  return (
    <div className="best-tours-wrapper">
      <Title title="we have the best" subtitle=" tours" />

      <div className="container">
        <section className="best-tours">
          <Card imgSrc={bahamas} place="Bahamas" />
          <Card imgSrc={venice} place="Venice" />
          <Card imgSrc={canada} place="Canada" />
        </section>
      </div>
    </div>
  )
}

export default BestTours

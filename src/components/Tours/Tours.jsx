import React from "react"
import Title from "../Title/Title"
import TourCard from "../TourCard/TourCard"
import img from "../../images/tours/test.jpg"

import "./tours.scss"

const Tours = () => {
  return (
    <div className="tours-wrapper">
      <Title title="Choose your dream " subtitle="tour" />
      <div className="container">
        <section className="tours">
          <TourCard imgSrc={img} price="2399" />
          <TourCard imgSrc={img} price="1589" />
          <TourCard imgSrc={img} price="3999" />
          <TourCard imgSrc={img} price="2500" />
          <TourCard imgSrc={img} price="4500" />
          <TourCard imgSrc={img} price="3499" />
          <TourCard imgSrc={img} price="3499" />
          <TourCard imgSrc={img} price="1589" />
          <TourCard imgSrc={img} price="4500" />
          <TourCard imgSrc={img} price="3699" />
          <TourCard imgSrc={img} price="1589" />
          <TourCard imgSrc={img} price="3499" />
          <TourCard imgSrc={img} price="2499" />
          <TourCard imgSrc={img} price="4500" />
          <TourCard imgSrc={img} price="1589" />
        </section>
      </div>
    </div>
  )
}

export default Tours

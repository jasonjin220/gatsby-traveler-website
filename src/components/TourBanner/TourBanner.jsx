import React from "react"
import "./tourBanner.scss"
import Image from "gatsby-image"

const TourBanner = ({ images }) => {
  const img1 = images[0].fluid
  const img2 = images[1].fluid
  const img3 = images[2].fluid
  const img4 = images[3].fluid
  const img5 = images[4].fluid
  return (
    <main>
      <div className="tour-banner">
        <figure className="tour-banner__item tour-banner__item--1">
          <Image
            fluid={img1}
            className="tour-banner__banner-img"
            alt="banner main img"
          />
        </figure>
        <figure className="tour-banner__item tour-banner__item--2">
          <Image
            fluid={img2}
            className="tour-banner__banner-img"
            alt="banner img2"
          />
        </figure>
        <figure className="tour-banner__item tour-banner__item--3">
          <Image
            fluid={img3}
            className="tour-banner__banner-img"
            alt="banner main img3"
          />
        </figure>
        <figure className="tour-banner__item tour-banner__item--4">
          <Image
            fluid={img4}
            className="tour-banner__banner-img"
            alt="banner main img4"
          />
        </figure>
        <figure className="tour-banner__item tour-banner__item--5">
          <Image
            fluid={img5}
            className="tour-banner__banner-img"
            alt="banner main img5"
          />
        </figure>
      </div>
    </main>
  )
}

export default TourBanner

import React from "react"
import Title from "../Title/Title"

import plane from "../../images/svg/aeroplane.svg"
import cruise from "../../images/svg/cruise.svg"
import route from "../../images/svg/route.svg"
import hotel from "../../images/svg/hotel.svg"
import ski from "../../images/svg/ski-sticks.svg"
import yacht from "../../images/svg/yacht.svg"

import "./services.scss"

const Services = () => {
  return (
    <div className="services-wrapper">
      <Title title="getting adventure with services" />
      <div className="container">
        <section className="services">
          <div className="service">
            <img className="service__icon" src={plane} alt="plane" />
            <h4 className="service__title">Air Ticketing</h4>
            <p className="service__text">
              Book flights with confidence. We compare flight deals from over
              150 airlines to find you the best prices.
            </p>
          </div>
          <div className="service">
            <img className="service__icon" src={cruise} alt="cruise" />

            <h4 className="service__title">Cruisess</h4>
            <p className="service__text">
              With thousands of inspiring cruises to choose from we have all the
              best cruise deals, promotions and exclusive offers.
            </p>
          </div>
          <div className="service">
            <img className="service__icon" src={route} alt="route" />

            <h4 className="service__title">Tour Packages</h4>
            <p className="service__text">
              We offer a wide range of tours across the world from wine tasting
              in Italy to Kenya Wild Safari.
            </p>
          </div>
          <div className="service">
            <img className="service__icon" src={hotel} alt="hotel" />

            <h4 className="service__title">Hotel Accomodations</h4>
            <p className="service__text">
              From romantic hideaways to last minute hotel deals, 2-star economy
              to 5-star luxury, we offer a range of accommodation options to
              suit everyone.
            </p>
          </div>
          <div className="service">
            <img className="service__icon" src={ski} alt="ski sticks" />

            <h4 className="service__title">Ski Experiences</h4>
            <p className="service__text">
              Everyone’s idea of the perfect ski holiday is unique, so we listen
              carefully to your needs and tailor-make a holiday that’s exactly
              what you’re looking for.
            </p>
          </div>
          <div className="service">
            <img className="service__icon" src={yacht} alt="yacht" />

            <h4 className="service__title">Sea Explorations</h4>
            <p className="service__text">
              Dreaming of a cruise around North America, Europe, or Asia? We
              offeer a wide range of tour packages to provide the expedition of
              your dreams.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services

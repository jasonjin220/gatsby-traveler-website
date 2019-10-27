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
      <Title title="getting adventure with" subtitle=" services" />
      <div className="container">
        <section className="services">
          <div class="service">
            <img className="service__icon" src={plane} alt="plane" />
            <h4 className="service__title">Air Ticketing</h4>
            <p class="service__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div class="service">
            <img className="service__icon" src={cruise} alt="cruise" />

            <h4 className="service__title">Cruisess</h4>
            <p class="service__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </div>
          <div class="service">
            <img className="service__icon" src={route} alt="route" />

            <h4 className="service__title">Tour Packages</h4>
            <p class="service__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem
              consequatur harum.
            </p>
          </div>
          <div class="service">
            <img className="service__icon" src={hotel} alt="hotel" />

            <h4 className="service__title">Hotel Accomodations</h4>
            <p class="service__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="service">
            <img className="service__icon" src={ski} alt="ski sticks" />

            <h4 className="service__title">Ski Experiences</h4>
            <p class="service__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div class="service">
            <img className="service__icon" src={yacht} alt="yacht" />

            <h4 className="service__title">Sea Explorations</h4>
            <p class="service__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services

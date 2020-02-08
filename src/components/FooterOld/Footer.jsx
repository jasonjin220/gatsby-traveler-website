import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <AniLink fade to="/">
          Home
        </AniLink>
        <AniLink fade to="/tours">
          Tours
        </AniLink>
        <AniLink fade to="/blog">
          Blog
        </AniLink>
        <AniLink fade to="/about">
          About
        </AniLink>
        <AniLink fade to="/contact">
          Contact
        </AniLink>
      </div>

      <div className="icons">
        <a href="https://www.tripadvisor.co.uk/">
          <FaTripadvisor />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
        <a href="https://en-gb.facebook.com/">
          <FaFacebookF />
        </a>
      </div>
      <div className="copyright">
        copyright &copy; Traveler travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer

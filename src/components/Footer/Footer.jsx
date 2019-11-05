import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"
import {
  FaFacebookF,
  FaInstagram,
  FaSquarespace,
  FaTwitter,
} from "react-icons/fa"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <AniLink to="/">Home</AniLink>
        <AniLink to="/tours">Tours</AniLink>
        <AniLink to="/about">About</AniLink>
      </div>

      <div className="icons">
        <AniLink>
          <FaFacebookF />
        </AniLink>
        <AniLink>
          <FaInstagram />
        </AniLink>
        <AniLink>
          <FaTwitter />
        </AniLink>
        <AniLink>
          <FaSquarespace />
        </AniLink>
      </div>
      <div className="copyright">
        copyright &copy; Traveler travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer

import React from "react"
import { Link } from "gatsby"
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
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="icons">
        <Link>
          <FaFacebookF />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
        <Link>
          <FaTwitter />
        </Link>
        <Link>
          <FaSquarespace />
        </Link>
      </div>
      <div className="copyright">
        copyright &copy; Traveler travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}

export default Footer

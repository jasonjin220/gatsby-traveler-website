import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa"
import "./SideDrawer.scss"

const SideDrawer = ({ show }) => {
  return (
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <ul>
        <li>
          <AniLink fade to="/">
            Home
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/tours">
            Tours
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/blog">
            Blog
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/about">
            About
          </AniLink>
        </li>

        <div className="side-drawer__social-links">
          <li>
            <a href="https://www.tripadvisor.co.uk/">
              <FaTripadvisor />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://en-gb.facebook.com/">
              <FaFacebookF />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default SideDrawer

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
          <AniLink fade to="/about">
            About
          </AniLink>
        </li>

        <div className="side-drawer__social-links">
          <li>
            <AniLink>
              <FaTripadvisor />
            </AniLink>
          </li>
          <li>
            <AniLink>
              <FaInstagram />
            </AniLink>
          </li>
          <li>
            <AniLink>
              <FaTwitter />
            </AniLink>
          </li>
          <li>
            <AniLink>
              <FaFacebookF />
            </AniLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default SideDrawer

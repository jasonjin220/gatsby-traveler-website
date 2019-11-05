import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"
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
            <Link>
              <FaTripadvisor />
            </Link>
          </li>
          <li>
            <Link>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link>
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link>
              <FaFacebookF />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default SideDrawer

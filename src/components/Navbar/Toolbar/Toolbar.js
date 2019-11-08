import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"
import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.scss"

const Toolbar = ({ isOpen, drawerClickHandler }) => (
  <header className="toolbar">
    <div className="toolbar-wrapper">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <AniLink fade to="/">
            TRAVELER
          </AniLink>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
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
            <div className="social-links">
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
        </div>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton isOpen={isOpen} click={drawerClickHandler} />
        </div>
      </nav>
    </div>
  </header>
)

export default Toolbar

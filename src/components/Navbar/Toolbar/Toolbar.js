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
        </div>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton isOpen={isOpen} click={drawerClickHandler} />
        </div>
      </nav>
    </div>
  </header>
)

export default Toolbar

import React from "react"
import { Link } from "gatsby"
import {
  FaFacebookF,
  FaInstagram,
  FaSquarespace,
  FaTwitter,
} from "react-icons/fa"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.scss"

const Toolbar = ({ isOpen, drawerClickHandler }) => (
  <header className="toolbar">
    <div className="toolbar-wrapper">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Link to="/">TRAVELER</Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tours">Tours</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <div className="social-links">
              <li>
                <Link>
                  <FaFacebookF />
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
                  <FaSquarespace />
                </Link>
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

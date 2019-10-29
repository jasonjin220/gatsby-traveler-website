import React from "react"
import { Link } from "gatsby"
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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

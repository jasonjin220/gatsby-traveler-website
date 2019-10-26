import React from "react"
import { Link } from "gatsby"

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
      </ul>
    </nav>
  )
}

export default SideDrawer

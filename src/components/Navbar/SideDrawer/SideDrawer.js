import React from "react"

import "./SideDrawer.scss"

const SideDrawer = ({ show }) => {
  return (
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tours">Tours</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer

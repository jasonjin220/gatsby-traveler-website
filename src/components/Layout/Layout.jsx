import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout

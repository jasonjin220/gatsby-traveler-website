import React, { useState } from "react"

import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import Backdrop from "./Backdrop/Backdrop"

const Navbar = () => {
  const [sideDrawer, sideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    sideDrawerOpen(sideDrawer => !sideDrawer)
  }
  const backdropClickHandler = () => sideDrawerOpen(false)

  return (
    <>
      <Toolbar
        isOpen={sideDrawer}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawer} />
      {sideDrawer && <Backdrop click={backdropClickHandler} />}
    </>
  )
}

export default Navbar

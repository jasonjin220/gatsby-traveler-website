import React from "react"

import "./hero.scss"

const Hero = ({ children }) => {
  return <header className="defaultHero hero">{children}</header>
}

export default Hero

import React from "react"

import "./banner.scss"

const Banner = ({ title, info, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner

import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import "./latestPostCard.scss"

const LatestPostCard = ({ post }) => {
  const { slug, image, title, published } = post

  return (
    <AniLink fade to={`/blog/${slug}`}>
      <div className="latest-post-card">
        <figure>
          <Image
            fluid={image.fluid}
            className="latest-post-card__img"
            alt="latest post card"
          />
        </figure>
        <h2 className="latest-post-card__title">{title}</h2>
        <p className="latest-post-card__published">Posted on {published}</p>
      </div>
    </AniLink>
  )
}

export default LatestPostCard

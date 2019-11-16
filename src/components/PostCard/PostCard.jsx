import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./postCard.scss"

const PostCard = ({ title, image, published, slug }) => {
  return (
    <AniLink fade to={`/blog/${slug}`}>
      <figure className="post-card">
        <div>
          <h2 className="post-card__title">{title}</h2>
          <p className="post-card__published">Posted on {published}</p>
        </div>
        <Image
          fluid={image.fluid}
          alt="post card"
          className="post-card__image"
        />
      </figure>
    </AniLink>
  )
}

export default PostCard

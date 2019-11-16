import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./blogCard.scss"

const BlogCard = ({ title, image, intro, published, slug }) => {
  return (
    <figure className="blog-card">
      <Image fluid={image.fluid} alt="blog card" className="blog-card__image" />
      <div className="blog-card__content">
        <h2 className="blog-card__title">{title}</h2>
        <p className="blog-card__published">Posted on {published}</p>
        <p className="blog-card__intro">{intro}</p>
        <AniLink fade to={`/blog/${slug}`}>
          <button type="button" className="btn-primary blog-card__btn">
            Read More
          </button>
        </AniLink>
      </div>
    </figure>
  )
}

export default BlogCard

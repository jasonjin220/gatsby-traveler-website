import React from "react"
import RecentPosts from "../RecentPosts/RecentPosts"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import "./blogContent.scss"

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "D MMMM Y")
          title
          intro
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const images = {
  renderNode: {
    "embedded-asset-block": node => {
      return (
        <img
          className="blog__image"
          width="100%"
          src={node.data.target.fields.file["en-US"].url}
          alt="blog"
        />
      )
    },
  },
}

const BlogContent = ({ title, published, text: { json } }) => {
  const response = useStaticQuery(getPosts)
  const posts = response.posts.edges
  return (
    <div className="container">
      <section className="blog-section">
        <article className="blog">
          <h1 className="blog__title">{title}</h1>
          <p className="blog__published">Posted on {published}</p>
          <div className="blog__content">
            {documentToReactComponents(json, images)}
          </div>
        </article>
        <RecentPosts posts={posts} />
      </section>
    </div>
  )
}

export default BlogContent

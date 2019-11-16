import React from "react"
import BlogCard from "../BlogCard/BlogCard"
import RecentPosts from "../RecentPosts/RecentPosts"
import { useStaticQuery, graphql } from "gatsby"

import "./blogList.scss"

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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Blogs = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.posts.edges

  console.log(posts)

  return (
    <div className="container">
      <section className="blog-list-section">
        <div>
          {posts.map(({ node }) => (
            <BlogCard {...node} key={node.id} />
          ))}
        </div>
        <RecentPosts posts={posts} />
      </section>
    </div>
  )
}

export default Blogs

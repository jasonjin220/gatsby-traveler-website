import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./blogList.scss"

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "D MMMM Y")
          title
          slug
          id: contentful_id
          image {
            fluid {
              src
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

  return <div>My blog list</div>
}

export default Blogs

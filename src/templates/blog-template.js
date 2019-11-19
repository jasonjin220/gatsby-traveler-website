import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import BlogContent from "../components/BlogContent/BlogContent"

const BlogTemplate = ({ data }) => {
  // console.log(data)
  const { title, image } = data.blog
  return (
    <Layout>
      <StyledHero opacity="true" img={image.fluid}>
        <Banner className="banner" title={title}></Banner>
      </StyledHero>
      <BlogContent {...data.blog} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blog: contentfulPost(slug: { eq: $slug }) {
      published(formatString: "D MMMM Y")
      title
      intro
      text {
        json
      }
      slug
      id: contentful_id
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BlogTemplate

import React from "react"
import PostCard from "../PostCard/PostCard"

import "./recentPosts.scss"

const RecentPosts = ({ posts }) => {
  return (
    <div className="blog-sidebar">
      <h2 className="blog-sidebar__title">Most Recent Posts</h2>

      <div className="blog-sidebar__post-cards">
        {posts.map(({ node }) => (
          <PostCard {...node} key={node.id} />
        ))}
      </div>
    </div>
  )
}

export default RecentPosts

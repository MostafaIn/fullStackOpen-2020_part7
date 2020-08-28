/* eslint-disable linebreak-style */
import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../../actions/blogActions'


const Blog = () => {
  const blogs = useSelector(state => state.blogs)

  const match = useRouteMatch('/blogs/:id')
  const blog = match ? blogs?.find( blog => blog.id === match.params.id) : null

  const dispatch = useDispatch()

  const handleLike = currBlog => {
    dispatch(likeBlog(currBlog))
  }

  // const handleDelete = currBlog => {
  //   dispatch(deleteBlog(currBlog))
  // }

  if(!blog) return null
  return (
    <div className="blog-details">
      <h4>{blog.title}</h4>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.url}</a>
      <p>{blog.likes} <button onClick={() => handleLike(blog)}>like</button></p>
      <p>Added by {blog.author}</p>
      {/* {(blog.user.username === user.username) &&
        <button style={{ color:'red' }} onClick={() => handleDelete(blog)}>remove</button>
      } */}
    </div>
  )
}

export default Blog

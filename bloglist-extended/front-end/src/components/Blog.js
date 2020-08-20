/* eslint-disable linebreak-style */
import React,{ useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../actions/blogActions'


const Blog = ({ blog, user }) => {
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()

  const handleLike = currBlog => {
    dispatch(likeBlog(currBlog))
  }

  const handleDelete = currBlog => {
    dispatch(deleteBlog(currBlog))
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <div className="blog-title">
        {blog.title} {blog.author}
        <button onClick={toggleVisibility}> {!visible ? 'view' : 'hide'} </button>
      </div>
      {visible &&
          <div className="blog-details">
            <p>{blog.url}</p>
            <p>{blog.likes} <button onClick={() => handleLike(blog)}>like</button></p>
            <p>{blog.author}</p>
            {(blog.user.username === user.username) &&
            <button style={{ color:'red' }} onClick={() => handleDelete(blog)}>remove</button>
            }
          </div>
      }
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default Blog

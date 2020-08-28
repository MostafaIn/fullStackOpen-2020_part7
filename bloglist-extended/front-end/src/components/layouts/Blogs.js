import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { initialBlogs } from '../../actions/blogActions'

import AddBlog from './AddBlog'
import Notification from './Notification'


const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {   
    dispatch(initialBlogs())
  }, [dispatch])

  if(!user) return null

  return (
    <div>
      <h2>Blog App</h2>
      <Notification />
        <AddBlog />
      {blogs.map(blog => <div key={blog.id} style={blogStyle}>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      </div>)}
    </div>
  )
}


const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: '1px solid #888',
  margin: '10px'
}

export default Blogs

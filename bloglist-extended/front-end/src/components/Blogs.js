import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'


import AddBlog from './AddBlog'
import Blog from './Blog'
import Notification from './Notification'
import { logOut } from '../actions/authActions'

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.auth)
  // const [message, setMessage] = useState({ msg:'', err: false })

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
    // window.localStorage.removeItem('loggedUser')
    // setUser(null)
  }

  // const handleAddBlog = async (newBlog) => {

  //   try {
  //     await blogService.createBlog(newBlog)
  //     await setBlogs([...blogs, newBlog])
  //     setMessage({ msg:`a new blog ${newBlog.title} by ${newBlog.author} added!`, err: false })
  //     blogFormRef.current.toggleVisibility()
  //   } catch (error) {
  //     setMessage({ msg:'Please Enter new blog values!', err: true })
  //   }
  //   setTimeout(() => setMessage({ msg:'', err: false }), 5000)
  // }

  // const handleLike = async (currBlog) => {
  //   const updated =  await blogService.updateBlog(currBlog)
  //   await setBlogs(blogs.map( blog => blog.id === currBlog.id ? updated : blog))
  // }

  // const handleDelete = async (targetBlog) => {
  //   if(window.confirm(`Remove blog ${targetBlog.title} by ${targetBlog.author}!`)){
  //     await blogService.deleteBlog(targetBlog)
  //     await setBlogs(blogs.filter( blog => blog.id !== targetBlog.id))
  //   }
  // }

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      <p>{user.name} logged in <button onClick={handleLogout}>logout</button></p>
      {/* <Togglable btnLabel="new blog" ref={blogFormRef}> */}
        <AddBlog />
      {/* </Togglable> */}
      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
          user={user}
        />
      )}
    </div>
  )
}



export default Blogs

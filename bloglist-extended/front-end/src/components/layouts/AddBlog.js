import React, { useRef } from 'react'
import { useField } from '../../hooks'

import { useDispatch } from 'react-redux'
import { addBlog } from '../../actions/blogActions'
import { setNotification } from '../../actions/notificationActions'

import Togglable from './Togglable'

const AddBlog = () => {
  const [title, titleReset] = useField('text')
  const [author, authorReset] = useField('text')
  const [url, urlReset] =useField('text')

  const dispatch = useDispatch()

  const blogFormRef = useRef()

  const handleAddBlog = async (e) => {
    e.preventDefault()
    const newBlog = { title: title.value, author: author.value, url: url.value }
    console.log(newBlog);
    
    try {
      await dispatch(addBlog(newBlog))
      dispatch(setNotification({ msg:`a new blog ${newBlog.title.value} by ${newBlog.author.value} added!`, err: false }))
      blogFormRef.current.toggleVisibility()
    } catch (error) {
      dispatch(setNotification({ msg:'Please Enter new blog values!', err: true }))
    }

    titleReset()
    authorReset()
    urlReset()

  }

  return <Togglable btnLabel="create new" ref={blogFormRef}>
    <form onSubmit={handleAddBlog}>
      <h3>create new blog</h3>
      <table>
        <tbody>
          <tr>
            <td>title :</td>
            <td>
              <input {...title} />
            </td>
          </tr>
          <tr>
            <td>author :</td>
            <td>
              <input {...author} />
            </td>
          </tr>
          <tr>
            <td>url :</td>
            <td>
              <input {...url} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit">create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
    </Togglable>
}

export default AddBlog

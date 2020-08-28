import React, { useState, useRef } from 'react'

import { useDispatch } from 'react-redux'
import { addBlog } from '../../actions/blogActions'
import { setNotification } from '../../actions/notificationActions'

import Togglable from './Togglable'

const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] =useState('')

  const dispatch = useDispatch()

  const blogFormRef = useRef()

  const handleAddBlog = async (e) => {
    e.preventDefault()
    const newBlog = { title, author, url }
    try {
      await dispatch(addBlog(newBlog))
      dispatch(setNotification({ msg:`a new blog ${newBlog.title} by ${newBlog.author} added!`, err: false }))
      blogFormRef.current.toggleVisibility()

    } catch (error) {
      dispatch(setNotification({ msg:'Please Enter new blog values!', err: true }))
    }

    setTitle('')
    setAuthor('')
    setUrl('')

  }

  return <Togglable btnLabel="create new" ref={blogFormRef}>
    <form onSubmit={handleAddBlog}>
      <h3>create new blog</h3>
      <table>
        <tbody>
          <tr>
            <td>title :</td>
            <td>
              <input
                type="text"
                value={title}
                id="title"
                name="title"
                onChange={ ({ target }) => setTitle(target.value) }
              />
            </td>
          </tr>
          <tr>
            <td>author :</td>
            <td>
              <input
                type="text"
                value={author}
                id="author"
                name="author"
                onChange={ ({ target }) => setAuthor(target.value) }
              />
            </td>
          </tr>
          <tr>
            <td>url :</td>
            <td>
              <input
                type="text"
                value={url}
                id="url"
                name="url"
                onChange={ ({ target }) => setUrl(target.value) }
              />
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

import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => token = `bearer ${newToken}`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createBlog = async (newBlog) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const res = await axios.post(baseUrl, newBlog, config)
  return res.data
}

const updateBlog = async( targetBlog ) => {
  targetBlog.likes += 1
  const res = await axios.put(`${baseUrl}/${targetBlog.id}`, targetBlog )
  return res.data
}

const deleteBlog = async (blog) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const res = await axios.delete(`${baseUrl}/${blog.id}`, config)
  return res.data
}


export default {
  setToken,
  getAll,
  createBlog,
  updateBlog,
  deleteBlog
}
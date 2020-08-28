import { INIT_BLOGS, NEW_BLOG, LIKE_BLOG, DELETE_BLOG } from './types'
import blogService from '../services/blogs'

export const initialBlogs = () => async dispatch => {
    const blogs = await blogService.getAll()
    blogs.sort((a,b) => b.likes - a.likes)

    dispatch({
        type:INIT_BLOGS,
        data: blogs
    })
}

export const addBlog = (newBlog) => async dispatch => {
        const blog = await blogService.createBlog(newBlog)

        dispatch({
            type: NEW_BLOG,
            data: blog
        })
}

export const likeBlog = (blog) => async dispatch => {
    const updated =  await blogService.updateBlog(blog)
    
    dispatch({
        type: LIKE_BLOG,
        data: updated
    })
}

export const deleteBlog = (blog) => async dispatch => {
    await blogService.deleteBlog(blog)

    dispatch({
        type: DELETE_BLOG,
        data: blog
    })
}
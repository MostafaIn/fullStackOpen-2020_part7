import { INIT_BLOGS, NEW_BLOG, LIKE_BLOG, DELETE_BLOG, COMMENT_BLOG } from '../actions/types'

const reducer = (state=[], action) => {
    switch (action.type) {
        case INIT_BLOGS:
            return action.data
        case NEW_BLOG:
            return [...state, action.data]
        case LIKE_BLOG:
            return state.map( blog => blog.id === action.data.id ? action.data : blog)
        case DELETE_BLOG:
            return state.filter( blog => blog.id !== action.data.id)
        case COMMENT_BLOG:
            const targetBlog = state.find(blog => blog.id === action.data.id)
            const commentedBlog = {...targetBlog, comments: action.data.comments}
            console.log(commentedBlog)
            return state.map( blog => blog.id === action.data.id ? commentedBlog : blog)
        default:
            return state
    }
}

export default reducer
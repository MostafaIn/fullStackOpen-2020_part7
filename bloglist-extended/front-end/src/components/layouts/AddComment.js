import React from 'react'
import { useField } from '../../hooks'

import { commentBlog } from '../../actions/blogActions'
import { setNotification } from '../../actions/notificationActions'
import { useDispatch } from 'react-redux'

const AddComment = ({blog}) => {
    const [comment, commentReset] = useField('text')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(comment.value){
            dispatch(commentBlog(blog.id, comment.value))
        }else{
            dispatch(setNotification({ msg:'Please Enter a comment!', err: true }))
        }
        commentReset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input {...comment} />
            <button type="submit">add comment</button>
        </form>
    )
}

export default AddComment

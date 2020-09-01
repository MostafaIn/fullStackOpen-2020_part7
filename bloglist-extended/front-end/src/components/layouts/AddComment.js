import React from 'react'
import { useField } from '../../hooks'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core'

import { commentBlog } from '../../actions/blogActions'
import { setNotification } from '../../actions/notificationActions'
import { useDispatch } from 'react-redux'

const AddComment = ({blog}) => {
    const classes = useStyles();

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
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
                label="comment"
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
                {...comment}
            />
            <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
            add comment</Button>
        </form>
    )
}

export default AddComment


const useStyles = makeStyles( theme => ({
    form: {
        width: '60%', // Fix IE 11 issue.
        [theme.breakpoints.down('sm')]: {
                width: '75%',
        },
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

import React, { useRef } from 'react'
import { useField } from '../../hooks'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField } from '@material-ui/core';

import { useDispatch } from 'react-redux'
import { addBlog } from '../../actions/blogActions'
import { setNotification } from '../../actions/notificationActions'

import Togglable from './Togglable'

const AddBlog = () => {
  const classes = useStyles(); 

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
      dispatch(setNotification({ msg:`a new blog ${newBlog.title} by ${newBlog.author} added!`, err: false }))
      blogFormRef.current.toggleVisibility()
    } catch (error) {
      dispatch(setNotification({ msg:'Please Enter new blog values!', err: true }))
    }

    titleReset()
    authorReset()
    urlReset()

  }

  return <Togglable btnLabel="create new" ref={blogFormRef}>
    <form onSubmit={handleAddBlog} className={classes.form} noValidate>
      <Typography component="h1" variant="h5">create new blog</Typography>
      <TextField
          label="Title"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
          {...title}
        />
        <TextField
          label="Author"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
          {...author}
        />
        <TextField
          label="Url"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
          {...url}
        />
      <Button 
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
      create
      </Button>
    </form>
    </Togglable>
}

export default AddBlog


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '40%', // Fix IE 11 issue.
    [theme.breakpoints.down('sm')]: {
			width: '65%',
		},
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

/* eslint-disable linebreak-style */
import React from 'react'
import { useRouteMatch } from 'react-router-dom'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { useSelector, useDispatch } from 'react-redux'
import { likeBlog, deleteBlog } from '../../actions/blogActions'
import Comments from './Comments'
import AddComment from './AddComment'


const Blog = () => {
  const classes = useStyles();

  const blogs = useSelector(state => state.blogs)

  const match = useRouteMatch('/blogs/:id')
  const blog = match ? blogs?.find( blog => blog.id === match.params.id) : null
  console.log('target blog: ',blog);
  
  const dispatch = useDispatch()

  const handleLike = currBlog => {
    dispatch(likeBlog(currBlog))
  }

  // const handleDelete = currBlog => {
  //   dispatch(deleteBlog(currBlog))
  // }

  if(!blog) return null
  return (
    <Card  className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{blog.title}</Typography>
        <Typography variant="body2" color="textSecondary" component="a">{blog.url}</Typography>
        <Typography variant="caption" component="h5">Added by {blog.author}</Typography>
        <CardActions>
          {blog.likes}
          <Button size="small" color="primary" onClick={() => handleLike(blog)}>
            <ThumbUpIcon fontSize="small" />
          </Button>
        </CardActions>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="body" component="h3">Comments</Typography>
        <AddComment blog={blog} />
        <Comments comments={blog.comments} />
      </CardContent>
      {/* {(blog.user.username === user.username) &&
        <button style={{ color:'red' }} onClick={() => handleDelete(blog)}>remove</button>
      } */}
    </Card>
  )
}

export default Blog


const useStyles = makeStyles({
  root: {
    margin:'10px auto',
    maxWidth: 600,
    backgroundColor:'#eee'
  }
});

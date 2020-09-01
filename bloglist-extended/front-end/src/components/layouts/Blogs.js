import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {Container, Card, CardContent, Typography } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'
import { initialBlogs } from '../../actions/blogActions'

import AddBlog from './AddBlog'


const Blogs = () => {
  const classes = useStyles();

  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {   
    dispatch(initialBlogs())
  }, [dispatch])

  if(!user) return null

  return (
    <Container>
      <Typography variant="h3">Blog App</Typography>
        <AddBlog />
        <Container className={classes.root}>
          {blogs.map(blog => <Card key={blog.id} className={classes.card}>
            <CardContent>
              <Typography variant="h6" component="h2">
                <Link to={`/blogs/${blog.id}`} className={classes.link}>{blog.title}</Link>
              </Typography>
            </CardContent>
          </Card>)}
        </Container>
    </Container>
  )
}


export default Blogs


const useStyles = makeStyles ( theme => ({
  root: {
    marginTop:'20px',
    [theme.breakpoints.down('sm')]: {
			marginTop: '40px',
		},
  },
  card: {
    margin:'10px auto',
    maxWidth: 600,
    backgroundColor:'#eee',
    '&:hover':{
      backgroundColor:'#e3e3e3',
    }
  },
  link:{
    textDecoration:'none',
    color:'#333'
  }
}));

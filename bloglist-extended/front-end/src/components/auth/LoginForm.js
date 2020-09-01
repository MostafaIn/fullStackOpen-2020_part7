import React from 'react'
import { useField } from '../../hooks'

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Typography, Button, Avatar, TextField } from '@material-ui/core';


import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../actions/authActions'
import { Redirect } from 'react-router-dom'

const LoginForm = () => {
  const classes = useStyles();

  const [username] = useField('text')
  const [password] = useField('password')
  
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(logIn({username: username.value, password: password.value}))
  }
  console.log(user)
  if(user) return <Redirect to="/blogs" />
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          log in to application
        </Typography>
      </div>
      <form onSubmit={handleLogin} className={classes.form} noValidate>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
          {...username}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
          {...password}
        />
        <Button 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
        login </Button>
      </form>  
    </Container>
  )
}

export default LoginForm


const useStyles = makeStyles( theme => ({
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
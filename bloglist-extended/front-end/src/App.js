import React, { useEffect, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

//Material-UI
import { CssBaseline } from '@material-ui/core'

import './App.css'
import { useDispatch } from 'react-redux'

import LoginForm from './components/auth/LoginForm'
import { loadUser } from './actions/authActions'
import Blogs from './components/layouts/Blogs'
import NavBar from './components/layouts/NavBar'
import Notification from './components/layouts/Notification'
import Users from './components/layouts/Users'
import User from './components/layouts/User'
import Blog from './components/layouts/Blog'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())    
  }, [dispatch])

  return (
    <Fragment>
      <CssBaseline />
        <NavBar />
        <Notification />
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:id" component={User} />
        <Route path="/blogs/:id" component={Blog} />
      </Switch>
    </Fragment>
  )
}

export default App
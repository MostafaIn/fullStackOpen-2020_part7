import React, { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

// import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import { initialBlogs } from './actions/blogActions'
import { loadUser } from './actions/authActions'

const App = () => {
  // const [user, setUser] = useState(null)
 const user = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialBlogs())
    dispatch(loadUser())
    // const loggedUserJSON = window.localStorage.getItem('loggedUser')
    // if(loggedUserJSON){
    //   const user = JSON.parse(loggedUserJSON)
    //   setUser(user)
    //   blogService.setToken(user.token)
    // }
  }, [dispatch])
  console.log(user)

  return (
    <div>
      {(user === null)
        ?
        <LoginForm
        />
        :
        <Blogs
        />
      }
    </div>
  )
}

export default App
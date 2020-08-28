import React, { useState } from 'react'

import Notification from '../layouts/Notification'

import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../actions/authActions'
import { Redirect } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(logIn({username, password}))
  }
  console.log(user)
  if(user) return <Redirect to="/blogs" />
  
  return (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
      <Notification />
      <div>
            username
        <input
          type="text"
          value={username}
          id="username"
          name="Username"
          onChange={ ({ target }) => setUsername(target.value) }
        />
      </div>
      <div>
            password
        <input
          type="password"
          value={password}
          id="password"
          name="password"
          autoComplete = "false"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </div>
      <button type="submit"> login </button>
    </form>
  )
}

export default LoginForm

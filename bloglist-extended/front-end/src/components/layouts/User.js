import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'

const User = () => {
    const users = useSelector(state => state.users)
    const match = useRouteMatch('/users/:id')
    const user = match ? users?.find(user => user.id === match.params.id) : null
// console.log('user', user)
        if(!user) return null
    return(
        <div>
            <h3>{user.name}</h3>
            <h5>added blogs</h5>
            {user.blogs.map( blog => <ul>
                    <li>{blog.title}</li>
            </ul>)}
        </div>
    )
}

export default User

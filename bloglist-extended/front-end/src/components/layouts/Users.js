import React,{ useEffect} from 'react'
import { Link } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import { getUsers } from '../../actions/userActions'

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    if(!users) return null
    
    return (
        <div>
            <h2>Users</h2>
            <table>
                <tr>
                    <th></th>
                    <th>blogs created</th>
                </tr>
                {users.map(user => <tr key={user.id}>
                    <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                    <td>{user.blogs.length}</td>
                </tr>)}
            </table>
            
        </div>
    )
}

export default Users

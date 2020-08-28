import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../actions/authActions'

const NavBar = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const handleLogout = () => dispatch(logOut())

    if(!user) return <Redirect to="/login" />

    return (
        <nav>
            {user ?
             <ul style={styles.navBar}>
                <li>
                    <Link to="/blogs">blogs</Link>
                </li>
                <li>
                    <Link to="/users">users</Link>
                </li>
                <li>
                <p>{user.name} logged in <button onClick={handleLogout}>logout</button></p>
                </li>
            </ul> 
            : 
            <Link to="/login">Log in</Link>}
        </nav>
    )
}

const styles = {
    navBar:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        maxWidth:'40%'
    }
}

export default NavBar


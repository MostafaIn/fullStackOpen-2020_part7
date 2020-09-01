import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../actions/authActions'

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core';


const NavBar = () => {
    const classes = useStyles();

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const handleLogout = () => dispatch(logOut())

    if(!user) return <Redirect to="/login" />

    return (
        <nav className={classes.root}>
            <AppBar position="sticky">
                {user &&
                    <Toolbar>
                        <Typography variant="h6" className={classes.routes}>
                            <Link to="/blogs" className={classes.link}>blogs</Link>
                            <Link to="/users" className={classes.link}>users</Link>
                        </Typography>
                        <Typography variant="caption">
                            {user.name} logged in 
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                size="small" 
                                onClick={handleLogout}
                            >logout</Button>
                        </Typography>
                    </Toolbar>
                }
            </AppBar>
        </nav>
    )
}
export default NavBar


const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
    },
    routes: {
      flexGrow: 1,
    },
    link:{
        color:'#fff',
        marginLeft: theme.spacing(4),
        textDecoration:'none'
    }
  }));


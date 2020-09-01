import React from 'react'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'

const User = () => {
    const classes = useStyles();

    const users = useSelector(state => state.users)
    const match = useRouteMatch('/users/:id')
    const user = match ? users?.find(user => user.id === match.params.id) : null
// console.log('user', user)
        if(!user) return null
    return(
        <Container className={classes.container}>
            <Typography variant="h2" component="h4" className={classes.title}>{user.name}</Typography>
            <Typography  variant="h6" component="h2" style={{marginTop:'40px'}}>added blogs</Typography>
            {user.blogs.map( blog => <List key={blog.id}>
                <ListItem>
                    <ListItemIcon>
                    <LabelImportantIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={blog.title} />
                </ListItem>
            </List>)}
        </Container>
    )
}

export default User


const useStyles = makeStyles({
    container: {
        width: '60%',
        margin:'10px auto',
    },
});

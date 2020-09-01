import React from 'react'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import LabelIcon from '@material-ui/icons/Label';

const Comments = ({comments}) => {
    const classes = useStyles();

    return (
        <Container  className={classes.root}>
            {comments.map( comment => <List component="div">
            <ListItem>
                <ListItemIcon>
                    <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={comment} />
            </ListItem>
            </List>)}
        </Container>
    )
}

export default Comments


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
});

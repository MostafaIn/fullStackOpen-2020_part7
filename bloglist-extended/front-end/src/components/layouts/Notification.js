import React from 'react'
import { useSelector } from 'react-redux'

// Material-UI
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


const Notification = () => {
  const classes = useStyles();
  const notification = useSelector(state => state.notification)

  if(!notification.msg){
    return null
  }

  return (
    <div className={classes.root}>
        <Alert variant="filled" severity={notification.err ? "error" : "success"}>
        {notification.msg}
        </Alert>
    </div>
  )
}

export default Notification


const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    
  },
}));
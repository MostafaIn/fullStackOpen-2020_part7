import React,{ useState, useImperativeHandle } from 'react'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';

const Togglable = React.forwardRef(({ children, btnLabel }, ref) => {
  const classes = useStyles();

  const [visible, setVisible] = useState(false)

  const hide = { display: visible ? 'none' : '' }
  const show = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return { toggleVisibility }
  })

  return (
    <div>
      <div style={hide}>
        <Fab color="primary" aria-label="add" onClick={toggleVisibility} className={classes.fab} >
          <AddIcon />
        </Fab>
      </div>
      <div style={show}>
        {children}
        <Fab color="secondary" aria-label="cancel" onClick={toggleVisibility} className={classes.fab} >
          <CancelIcon />
        </Fab>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable


const useStyles = makeStyles ( theme => ({
  fab: {
    position: 'absolute',
    top: theme.spacing(12),
    right: theme.spacing(12),
  },
}));

import React,{ useEffect} from 'react'
import { Link } from 'react-router-dom'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core'


import { useDispatch,useSelector } from 'react-redux'
import { getUsers } from '../../actions/userActions'

const Users = () => {
    const classes = useStyles()

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    if(!users) return null
    
    return (
        <div>
            <Typography variant="h3" className={classes.title}>Users</Typography>
            <TableContainer className={classes.container}>
                <Table stickyHeader>
                    <TableBody>
                            <TableRow>
                                <TableCell className={classes.headerCell}>username</TableCell>
                                <TableCell className={classes.headerCell}>blogs created</TableCell>
                            </TableRow>
                            {users.map( user => <TableRow key={user.id}>
                                <TableCell><Link to={`/users/${user.id}`} className={classes.link}>{user.name}</Link></TableCell>
                                <TableCell>{user.blogs.length}</TableCell>
                            </TableRow>)}
                            
                    </TableBody>
                </Table>
            </TableContainer>
            
        </div>
    )
}

export default Users


const useStyles = makeStyles( theme => ({
    title:{
        marginLeft: theme.spacing(12),
        [theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(4),
		},
    },
    container: {
        width: '60%',
        margin:'10px auto',
    },
    headerCell: {
        color:'#fff',
        backgroundColor:'#333',
        fontSize: '1rem'
    },
    link:{
        textDecoration:'none',
        color:'#333',
        '&:hover':{
        color:'#000',
        }
    }

}));

import { LOAD_USER, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from "./types"
import loginServices from '../services/login'
import blogServices from '../services/blogs'
import { setNotification } from '../actions/notificationActions'
import { storeData, getData, removeData } from '../helpers/localStorage'

export const loadUser = () => async dispatch => {
      const user = getData('loggedUser')
      if(user){
          blogServices.setToken(user.token)
      }
      dispatch({
          type: LOAD_USER,
          data: user
      })
}

export const logIn = (credentials) => async dispatch => {
    const { username, password } = credentials
    try {
        const user = await loginServices.login(credentials)
        blogServices.setToken(user.token)
        storeData('loggedUser', user)
  
        dispatch({
            type: LOG_IN_SUCCESS,
            data: user
        })
    } catch (error) {
        dispatch({ type: LOG_IN_FAIL})
        if(!username && !password){
            dispatch(setNotification({ msg:'Please Enter username and password!', err: true }))
         }else{
            dispatch(setNotification({ msg:'wrong username or password!', err: true }))
         }
    }
        
}

export const logOut = () => dispatch => {
    removeData('loggedUser')
    dispatch({ type: LOG_OUT })
}
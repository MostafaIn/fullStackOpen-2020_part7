import { GET_USERS } from './types'

import userServices from '../services/users'


export const getUsers = () => async dispatch => {
    const users = await userServices.getAll()
    dispatch({
        type: GET_USERS,
        data: users
    })
}
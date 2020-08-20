import { SET_NOTIFICATION, CLEAR_NOTIFICATION} from './types'

let timeoutID
export const setNotification = (content) => async dispatch => {
    dispatch({
        type: SET_NOTIFICATION,
        data: content
    })

    if(timeoutID){
        clearTimeout(timeoutID)
    }

    timeoutID = setTimeout(() => {
        dispatch({
            type: CLEAR_NOTIFICATION
        })
    }, 5000);
}

export const clearNotification = () => dispatch => dispatch ({type: CLEAR_NOTIFICATION})
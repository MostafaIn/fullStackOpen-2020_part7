import { SET_NOTIFICATION, CLEAR_NOTIFICATION} from '../actions/types'

const reducer = (state = {} , action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            console.log(action.data)
            return action.data
        case CLEAR_NOTIFICATION:
            console.log(action)
            return {msg:null,err: false}
        default:
            return state;
    }
}
export default reducer
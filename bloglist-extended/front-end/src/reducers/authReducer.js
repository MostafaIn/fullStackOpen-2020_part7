import { LOAD_USER, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from "../actions/types"

const reducer = (state = null, action) => {
    switch (action.type) {
        case LOAD_USER:
            console.log(action.data)
            return action.data
        case LOG_IN_SUCCESS:
            console.log(action.data)
            return action.data
        case LOG_OUT:
            return null
        case LOG_IN_FAIL:
            return null
        default:
            return state;
    }
}

export default reducer

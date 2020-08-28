import { LOAD_USER, LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from "../actions/types"

const initialState = {
    user: null,
    isLoading:true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
        case LOG_IN_SUCCESS:
            return { ...state, user: action.data, isLoading:false}
        case LOG_IN_FAIL:
            return state
        case LOG_OUT:
            return {...state, user: null, isLoading: false}
        default:
            return state;
    }
}

export default reducer

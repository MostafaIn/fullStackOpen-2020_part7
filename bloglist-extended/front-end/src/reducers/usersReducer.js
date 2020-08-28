import { GET_USERS } from '../actions/types'


const reducer = (state = null, action) => {
    switch (action.type) {
        case GET_USERS:
            return action.data;
        default:
            return state;
    }
}
export default reducer
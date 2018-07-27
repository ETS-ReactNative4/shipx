import { GET_USER, GET_REAUTH, LOGOUT } from '../actions/types'

export const userReducer = (state = { currentUser: {} }, action) => {
    switch(action.type) {
        case GET_USER:
        return {
            ...state,
            currentUser: action.payload
        };

        case GET_REAUTH:
        // debugger
        return {
            ...state,
            currentUser: action.payload
        };

        case LOGOUT:
        return {
            ...state,
            currentUser: {}
        }

        default:
            return state
    }
}
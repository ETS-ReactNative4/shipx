import { GET_REQUESTS, CREATE_REQUEST } from '../actions/types'

export const requestReducer = (state = { requestsList: [] }, action) => {
    switch(action.type) {
        case GET_REQUESTS:
        return {
            ...state,
            requestsList: action.payload
        };

        case CREATE_REQUEST:
        // debugger
        return {
            ...state,
            requestsList: [...state.requestsList, action.payload]
        }

        default:
            return state
    }
}


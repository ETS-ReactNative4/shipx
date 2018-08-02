import { GET_REQUESTS, CREATE_REQUEST, GET_ALL_REQUESTS, GET_MATCHING_REQUESTS } from '../actions/types'

export const requestReducer = (state = { requestsList: [], allRequestsList: [] }, action) => {
    switch(action.type) {
        case GET_REQUESTS:
        return {
            ...state,
            requestsList: action.payload
        };

        case GET_ALL_REQUESTS:
        return {
            ...state,
            allRequestsList: action.payload
        };

        case GET_MATCHING_REQUESTS:
        return {
            ...state,
            getMatchingRequests: action.payload
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


import { GET_EXPATS, CREATE_EXPAT } from '../actions/types'

export const expatReducer = (state = { expatsList: [] }, action) => {
    switch(action.type) {
        case GET_EXPATS:
        return {
            ...state,
            expatsList: action.payload
        };

        case CREATE_EXPAT:
        // debugger
        return {
            ...state,
            expatsList: [...state.expatsList, action.payload]
        }

        default:
            return state
    }
}
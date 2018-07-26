import { GET_TRIPS, CREATE_TRIP } from '../actions/types'

export const tripReducer = (state = { tripsList: [] }, action) => {
    switch(action.type) {
        case GET_TRIPS:
        return {
            ...state,
            tripsList: action.payload
        };
        
        case CREATE_TRIP:
        // debugger
        return {
            ...state,
            tripsList: [...state.tripsList, action.payload]
        }

        default:
            return state
    }
}

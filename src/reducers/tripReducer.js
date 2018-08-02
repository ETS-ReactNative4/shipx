import { GET_TRIPS, CREATE_TRIP, GET_SELECTED_TRIP } from '../actions/types'

export const tripReducer = (state = { tripsList: [], selectedTrip: {} }, action) => {
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
        };

        case GET_SELECTED_TRIP:
        // debugger
        return {
            ...state,
            selectedTrip: action.payload
        }

        default:
            return state
    }
}

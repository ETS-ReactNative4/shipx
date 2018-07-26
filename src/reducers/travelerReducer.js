import { GET_TRAVELERS, CREATE_TRAVELER } from '../actions/types'

export const travelerReducer = (state = { travelersList: [] }, action) => {
    switch(action.type) {
        case GET_TRAVELERS:
        return {
            ...state,
            travelersList: action.payload
        };

        case CREATE_TRAVELER:
        // debugger
        return {
            ...state,
            travelersList: [...state.travelersList, action.payload]
        }

        default:
            return state
    }
}
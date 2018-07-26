import { combineReducers } from 'redux';
import { requestReducer } from './requestReducer'
import { tripReducer } from './tripReducer'
import { expatReducer } from './expatReducer';
import { travelerReducer } from './travelerReducer';
import { userReducer } from './userReducer';


const rootReducer = combineReducers({
    requests: requestReducer,
    trips: tripReducer,
    expats: expatReducer,
    travelers: travelerReducer,
    authentication: userReducer
  });

export default rootReducer
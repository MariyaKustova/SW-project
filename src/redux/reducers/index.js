import {combineReducers} from 'redux';
import peopleReducer from './people';
import userDetailsReducer from './peopleDetails';

const rootReducer = combineReducers({
    people: peopleReducer,
    peopleDetails: userDetailsReducer,
})

export default rootReducer;
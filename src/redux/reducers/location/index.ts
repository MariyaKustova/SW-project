import {LOCATION_CHANGE} from './actions';
import {LocationState, LocationAction} from '../types';
import {PATH_FOR_LINK} from '../../../constants';

const initialPeopleState: LocationState = {
    location: PATH_FOR_LINK.MAIN_ROUTE,
}

export default function peopleReducer(state = initialPeopleState, action: LocationAction) {
    switch (action.type) {
        case LOCATION_CHANGE: {
            const {location} = action.payload;

            return {
                ...state,
                location,
            };
        }

        default:
            return state;
    }
}
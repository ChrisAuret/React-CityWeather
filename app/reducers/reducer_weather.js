// Reducers are just functions

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    
    switch(action.type) {
        case FETCH_WEATHER:
            // handle payload
            // Not allowed to set state.
            //return state.concat([ action.payload.data ]); // this is the data we care about here in '*.*.data'
            return [ action.payload.data, ...state ];
    }
    
    
    return state;
}
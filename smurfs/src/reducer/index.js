// import actions, set up initial state, pass state into reducer

import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
} from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case POST_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case POST_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
        return state;
    }
}
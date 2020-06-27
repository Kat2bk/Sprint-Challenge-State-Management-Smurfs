import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

// we need to get the data, create a function dispatch, and we need to add the data, create a function dispatch for that too

export const getSmurfs = () => (dispatch) => {
    dispatch({type: FETCHING_SMURF_START});
    axios.get("https://localhost:3333/smurfs")
    .then(response => {
        console.log(response);
    dispatch({type: FETCHING_SMURF_SUCCESS, payload: response.data});
    })
}
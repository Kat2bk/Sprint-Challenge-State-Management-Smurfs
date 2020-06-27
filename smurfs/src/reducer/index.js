// import actions, set up initial state, pass state into reducer

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}
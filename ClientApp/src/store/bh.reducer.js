import { START_FETCH, GET_FETCHED } from "./bh.actions";


const initialState = {
    list: [],
    selected: null,
    isFetching: true,
};

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCH:
            return { ...state, isFetching: true, list: [] };
        case GET_FETCHED:
            return { ...state, isFetching: false, list: action.data };
        default:
            return state;
    }
}
import { API_BH } from "../__api";

export const START_FETCH = "START_FETCH";
function startFetch() {
    return {
        type: START_FETCH,
    };
}

export const GET_FETCHED = "GET_FETCHED";
function getFetched(data) {
    return {
        type: GET_FETCHED,
        data
    };
}

export const GET_FETCHED = "GET_FETCHED";
export function selectBericht(id) {
    return {
        type: GET_FETCHED,
        id
    };
}

/** Lade die Daten von der API  */
export function fetchData() {
    return (dispatch) => {
        dispatch(startFetch());
        return API_BH.getAll()
            .then((res) => res.json())
            .then((json) => dispatch(getFetched(json)));
    };
}
import { START_FETCH, GET_FETCHED } from "./bh.actions";
import { ReportsActionTypes } from "./bh.types";
import { Report } from "../types/report.types";

const initialState: Report[] = [];

export default function reportsReducer(state = initialState, action: ReportsActionTypes) {
    switch (action.type) {
        case START_FETCH:
            return { ...state, isFetching: true, list: [] };
        case GET_FETCHED:
            return { ...state, isFetching: false, list: action.data };
        default:
            return state;
    }
}
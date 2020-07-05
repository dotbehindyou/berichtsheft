import { API_Reports } from "../__api";
import { Report } from "../types/report.types";
import { ReportsActionTypes } from "./bh.types";
import { Dispatch } from "redux";

export const START_FETCH = "START_FETCH";
function startFetch() : ReportsActionTypes {
    return {
        type: START_FETCH,
    };
}

export const GET_FETCHED = "GET_FETCHED";
function getFetched(data: Report[]): ReportsActionTypes {
    return {
        type: GET_FETCHED,
        data
    };
}

/** Lade die Daten von der API  */
export function fetchData() {
    return (dispatch: Dispatch<ReportsActionTypes>) => {
        dispatch(startFetch());
        return API_Reports.getAll()
            .then((res) => res.json())
            .then((json) => dispatch(getFetched(json)));
    };
}
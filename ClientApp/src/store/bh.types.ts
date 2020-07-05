import { Report } from "../types/report.types";

export const START_FETCH = "START_FETCH";
export const GET_FETCHED = "GET_FETCHED";

type StartFetchType = {
    type: typeof START_FETCH,
}

type GetFetchedType = {
    type: typeof GET_FETCHED,
    data: Report[]
}

export type ReportsActionTypes = StartFetchType | GetFetchedType;
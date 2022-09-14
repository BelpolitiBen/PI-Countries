import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const GET_COUNTRY_NAMES = "GET_COUNTRY_NAMES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";

export const getCountries = () => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/countries`);
        return dispatch({ type: GET_COUNTRIES, payload: res.data });
    };
};

export const getCountriesByName = (name) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:3001/countries?name=${name}`
        );
        return dispatch({ type: GET_COUNTRIES_BY_NAME, payload: res.data });
    };
};

export const getCountryNames = () => {
    return {
        type: GET_COUNTRY_NAMES,
    };
};

export const getCountryDetail = (id) => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/countries/${id}`);
        console.log(res.data);
        return dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data });
    };
};

export function addActivity(payload) {
    return async function (dispatch) {
        const res = await axios.post(
            `http://localhost:3001/activities/add`,
            payload
        );
        return res;
    };
}

export const getActivities = () => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/activities`);
        return dispatch({ type: GET_ACTIVITIES, payload: res.data });
    };
};

export const openSidebar = (payload) => {
    return {
        type: OPEN_SIDEBAR,
        payload,
    };
};

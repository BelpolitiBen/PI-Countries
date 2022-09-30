import axios from "axios";

//Acá le dije no a los typos
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const GET_COUNTRY_NAMES = "GET_COUNTRY_NAMES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const SORTING = "SORTING";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const DISPLAY_COUNTRIES = "DISPLAY_COUNTRIES";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const CHANGE_THEME = "CHANGE_THEME";

export const getCountries = () => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/countries`);
        return dispatch({ type: GET_COUNTRIES, payload: res.data });
    };
};

export const getCountriesByName = (name) => {
    const usefulName = name === undefined ? "" : name;
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:3001/countries?name=${usefulName}`
        );
        return dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: { data: res.data, name: usefulName }, //Tuve que enviar un objeto con los datos y el nombre como payload para poder mantener el input del usuario en la SearchBar.
        });
    };
};

export const getCountryDetail = (id) => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data });
    };
};

export function addActivity(payload) {
    return async function (dispatch) {
        try {
            const res = await axios.post(
                `http://localhost:3001/activities/add`,
                payload
            );
            return res;
        } catch (error) {
            return error.message;
            /* Acá traté de manejar los estados desde el back pero solo logré confundirme. 
            Ya pasadas unas semanas desde entonces, me hago algunas ideas de como se implementaría, pero en este proyecto opté por pulir las cosas que ya había hecho. */
        }
    };
}

export const getActivities = () => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/activities`);
        return dispatch({ type: GET_ACTIVITIES, payload: res.data });
    };
};

export function sorting(payload) {
    return {
        type: SORTING,
        payload,
    };
}
export function filterByActivities(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload,
    };
}

export function filterByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    };
}

export function displayCountries() {
    return {
        type: DISPLAY_COUNTRIES,
    };
}

export function clearDetail() {
    return {
        type: CLEAR_DETAIL,
    };
}
export function changeTheme() {
    return {
        type: CHANGE_THEME,
    };
}

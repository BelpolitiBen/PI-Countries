import displayFunction from "../utils/displayFunction";
import filterCountries from "../utils/filterCountries";
import {
    ADD_ACTIVITY,
    CHANGE_THEME,
    CLEAR_DETAIL,
    DISPLAY_COUNTRIES,
    FILTER_BY_ACTIVITIES,
    FILTER_BY_CONTINENT,
    GET_ACTIVITIES,
    GET_COUNTRIES,
    GET_COUNTRIES_BY_NAME,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_NAMES,
    SORTING,
} from "./actions";

const initialState = {
    allCountries: [],
    countriesByName: [],
    countries: [],
    countryNames: [],
    filtersContinent: [],
    filtersActivities: [],
    sorting: "",
    lastSearch: "",
    countryDetail: {},
    activities: [],
    error: null,
    theme: "dark",
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                countries: state.countries.length ? state.countries : payload,
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countriesByName: payload.data,
                lastSearch: payload.name,
            };
        case GET_COUNTRY_NAMES: {
            return {
                ...state,
                countryNames: state.countries.map((e) => e.name),
            };
        }
        case GET_COUNTRY_DETAIL: {
            const detail = payload[0];
            return {
                ...state,
                countryDetail: detail,
            };
        }
        case ADD_ACTIVITY:
            return {
                ...state,
            };
        case GET_ACTIVITIES: {
            return {
                ...state,
                activities: payload,
            };
        }
        case SORTING: {
            return {
                ...state,
                sorting: payload,
            };
        }
        case FILTER_BY_ACTIVITIES: {
            return {
                ...state,
                filtersActivities: payload,
            };
        }
        case FILTER_BY_CONTINENT: {
            return {
                ...state,
                filtersContinent: payload,
            };
        }
        case DISPLAY_COUNTRIES:
            const countriesToDisplay = state.countriesByName.length
                ? state.countriesByName
                : state.allCountries;
            const countries = displayFunction(
                countriesToDisplay,
                state.sorting,
                state.filtersContinent,
                state.filtersActivities,
                filterCountries
            );
            return {
                ...state,
                countries: countries,
            };
        case CLEAR_DETAIL:
            return {
                ...state,
                countryDetail: {},
            };
        case CHANGE_THEME:
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            };
        default:
            break;
    }
}

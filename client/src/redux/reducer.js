import displayFunction from "../utils/displayFunction";
import filterCountries from "../utils/filterCountries";
import {
    ADD_ACTIVITY,
    CLEAR_ALL,
    CLEAR_DETAIL,
    DISPLAY_COUNTRIES,
    FILTER_BY_ACTIVITIES,
    FILTER_BY_CONTINENT,
    GET_ACTIVITIES,
    GET_COUNTRIES,
    GET_COUNTRIES_BY_NAME,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_NAMES,
    POST_ERROR,
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
    countryDetail: {},
    activities: [],
    error: null,
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
                countriesByName: payload,
                countries: payload,
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
        case POST_ERROR:
            return {
                ...state,
                error: payload,
            };
        case CLEAR_DETAIL:
            return {
                ...state,
                countryDetail: {},
            };
        case CLEAR_ALL:
            return {
                ...state,
                allCountries: [],
                countriesByName: [],
                countries: [],
                countryNames: [],
                filtersContinent: [],
                filtersActivities: [],
                sorting: "",
                countryDetail: {},
                activities: [],
            };
        default:
            break;
    }
}

import {
    ADD_ACTIVITY,
    GET_ACTIVITIES,
    GET_COUNTRIES,
    GET_COUNTRIES_BY_NAME,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_NAMES,
    OPEN_SIDEBAR,
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
    sidebar: "",
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
        case OPEN_SIDEBAR: {
            return {
                ...state,
                sidebar: payload,
            };
        }

        default:
            break;
    }
}

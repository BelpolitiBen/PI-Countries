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
    SORTING,
} from "./actions";

const initialState = {
    allCountries: [],
    countriesByName: [],
    countries: [],
    filtersContinent: [],
    filtersActivities: [],
    sorting: "",
    lastSearch: "",
    countryDetail: {},
    activities: [],
    theme: "dark",
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                countries: state.countries.length ? state.countries : payload,
                //GET_COUNTRIES popula el estado de allCountries e, inicialmente, el de countries. Pero despues de la primera carga DISPLAY_COUNTRIES se encarga de la segunda tarea.
            };
        case GET_COUNTRIES_BY_NAME:
            /* Esto tiene 3 usos. Popula el countriesByName, que se usa en DISPLAY_COUNTRIES. Modifica countries, para que en el caso de que no se encuentre nada y 
            la SearchBar no llame a displayCountries, se muestre el texto de que no se encontraron países y el boton para recargar. Y le pasa el nombre a lastSearch, 
            que se usa en el SearchBar para mantener el input del usuario despues de cambiar de páginas. */
            return {
                ...state,
                countriesByName: payload.data,
                countries: payload.data,
                lastSearch: payload.name,
            };
        case GET_COUNTRY_DETAIL: {
            const detail = payload[0]; //Ya no me acuerdo porque el detail es el primer elemento del payload ;_; Es verdad lo que dicen de que hay que comentar las cosas en el momento
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
            /* La parte mas compleja del reducer. Toma los países relevantes, todos los filtros y la funcion de filtrado y se los pasa 
             a la función que los ordena en base a todo eso. Despues pasa el resultado a el estado countries, que son los países que se renderizan. 
             Podría haber hecho la funcion acá pero iba a quedar ilegible con todo el anidamiento. */
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
                theme: state.theme === "dark" ? "light" : "dark", // Me imagino que hay una forma mas estándar para hacer esto pero no la busqué.
            };
        default:
            break;
    }
}

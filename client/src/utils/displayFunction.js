/* Esta función toma los países y los corre por todos los filtros. Devuelve los países en el orden que se deben mostrar. */

const displayFunction = (
    countries,
    sort,
    continentFilters,
    activityFilters,
    filterFunction
) => {
    /* Si hay filtros, hace un .filter, en el que cada iteración llama a la función de filtrado que le pasé por argumento. 
    La función devuelve un booleano que determina si el .filter lo agrega al array resultante o no. */
    const continentFiltered = !continentFilters.length
        ? countries
        : countries.filter((country) =>
              filterFunction(country, continentFilters, "continents")
          );
    // Tomamos los países ya filtrados y los pasamos por el segundo filtro
    const activitiesFiltered = !activityFilters.length
        ? continentFiltered
        : continentFiltered.filter((country) =>
              filterFunction(country, activityFilters, "activities")
          );
    let sortedArr = [];
    /* Dependiendo del tipo de sort, ordeno los paises ya pasados por los 2 tipos de filtros */
    switch (sort) {
        case "A-Z":
            sortedArr = activitiesFiltered.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            break;
        case "Z-A":
            sortedArr = activitiesFiltered.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            break;
        case "Largest Pop.":
            sortedArr = activitiesFiltered.sort(function (a, b) {
                if (a.population < b.population) {
                    return 1;
                }
                if (a.population > b.population) {
                    return -1;
                }
                return 0;
            });
            break;
        case "Smallest Pop.":
            sortedArr = activitiesFiltered.sort((a, b) => {
                if (a.population > b.population) {
                    return 1;
                }
                if (a.population < b.population) {
                    return -1;
                }
                return 0;
            });
            break;
        default: //En caso de que no haya filtros o un método de sort, los países salen de la función tal y como llegaron.
            sortedArr = activitiesFiltered;
            break;
    }
    return sortedArr; // Devuelve los países ya filtrados y ordenados segun el sort adecuado
};

export default displayFunction;

const displayFunction = (
    countries,
    sort,
    continentFilters,
    activityFilters,
    filterFunction
) => {
    const continentFiltered = !continentFilters.length
        ? countries
        : countries.filter((country) =>
              filterFunction(country, continentFilters, "continents")
          );
    const activitiesFiltered = !activityFilters.length
        ? continentFiltered
        : continentFiltered.filter((country) =>
              filterFunction(country, activityFilters, "activities")
          );
    let sortedArr = [];
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
        default:
            sortedArr = activitiesFiltered;
            break;
    }
    return sortedArr;
};

export default displayFunction;

/* Devuelve los argumentos para el .slice que genera los países que se renderizan en cada página a partír de la página actual y la cantidad de países por página  */

const currentPageFunc = (currentPage, countriesPerPage) => {
    if (currentPage === 1) {
        return [0, 9]; //Hardcodeado para devolver los primeros 9 países en la primera página, como pide el readme.
    } else {
        const lastCountry = currentPage * countriesPerPage - 1; //- 1 porque la primera página tiene 1 país menos, y todas las páginas subsiguientes lo tienen que tener en cuenta.
        const firstCountry = lastCountry - countriesPerPage;
        return [firstCountry, lastCountry];
    }
};

/* Devuelve el array con números para la paginación a partir de la cantidad de países y la cantidad de países por página. 
La primera página esta hardcodeada para tener 9 países mientras todas las otras tienen 10, tuve que tener eso en consideración al hacer esta función. */

const countriesFunc = (countries, countriesPerPage) => {
    const pageNumbers = countries === 0 ? [] : [1];
    const maxPages = Math.ceil((countries - 9) / countriesPerPage);
    if (countries > 9) {
        for (let i = 1; i <= maxPages; i++) {
            pageNumbers.push(i + 1);
        }
    }
    return pageNumbers;
};

/* Esta función simplemente le pasa los valores necesarios a las otras funciones para poder devolver 
los puntos de corte para las cards de países y el array con números para la paginación */

const paginationHelper = (currentPage, countries) => {
    const countriesPerPage = 10;
    const [sliceStart, sliceEnd] = currentPageFunc(
        currentPage,
        countriesPerPage
    );
    const pageNumbers = countriesFunc(countries, countriesPerPage);
    return [[sliceStart, sliceEnd], pageNumbers];
};

export default paginationHelper;

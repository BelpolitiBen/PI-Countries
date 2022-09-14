const currentPageFunc = (currentPage, countriesPerPage) => {
    if (currentPage === 1) {
        return [0, 9];
    } else {
        const lastCountry = currentPage * countriesPerPage - 1;
        const firstCountry = lastCountry - countriesPerPage;
        return [firstCountry, lastCountry];
    }
};

const countriesFunc = (countries, countriesPerPage) => {
    const pageNumbers = [1];
    const maxPages = Math.ceil((countries - 9) / countriesPerPage);
    if (countries > 9) {
        for (let i = 1; i <= maxPages; i++) {
            pageNumbers.push(i + 1);
        }
    }
    return pageNumbers;
};

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

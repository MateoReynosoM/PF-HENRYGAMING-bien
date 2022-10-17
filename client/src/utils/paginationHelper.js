/* Devuelve los argumentos para el .slice que genera los países que se renderizan en cada página a partír de la página actual y la cantidad de países por página  */

const currentPageFunc = (currentPage, productsPerPage) => {
    const lastProduct = currentPage * productsPerPage;
    const firstProduct = lastProduct - productsPerPage;
    return [firstProduct, lastProduct];
};

/* Devuelve el array con números para la paginación a partir de la cantidad de países y la cantidad de países por página. 
La primera página esta hardcodeada para tener 9 países mientras todas las otras tienen 10, tuve que tener eso en consideración al hacer esta función. */

const productsFunc = (products, productsPerPage) => {
    const pageNumbers = [];
    const maxPages = Math.ceil(products / productsPerPage);
    if (products > 8) {
        for (let i = 1; i <= maxPages; i++) {
            pageNumbers.push(i);
        }
    }
    return pageNumbers;
};

/* Esta función simplemente le pasa los valores necesarios a las otras funciones para poder devolver 
los puntos de corte para las cards de países y el array con números para la paginación */

const paginationHelper = (currentPage, products) => {
    const productsPerPage = 8;
    const [sliceStart, sliceEnd] = currentPageFunc(
        currentPage,
        productsPerPage
    );
    const pageNumbers = productsFunc(products, productsPerPage);
    return [[sliceStart, sliceEnd], pageNumbers];
};

export default paginationHelper;

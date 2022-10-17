const currentPageFunc = (currentPage, productsPerPage) => {
    const lastProduct = currentPage * productsPerPage;
    const firstProduct = lastProduct - productsPerPage;
    return [firstProduct, lastProduct];
};

const productsFunc = (products, productsPerPage) => {
    const pageNumbers = products === 0 ? [] : [1];
    const maxPages = Math.ceil(products / productsPerPage);
    if (products > 8) {
        for (let i = 2; i <= maxPages; i++) {
            pageNumbers.push(i);
        }
    }
    return pageNumbers;
};

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

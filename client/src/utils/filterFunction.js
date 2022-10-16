export const filterFunction = ([
    filterByType,
    filterByBrand,
    filterByPrice,
    allProducts,
]) => {
    function filtrado(array1, array2) {
        return array1.filter((object1) => {
            return array2.some((object2) => {
                return object1.id === object2.id;
            });
        });
    }
    const brandFiltered =
        !filterByBrand.length || !filterByBrand ? allProducts : filterByBrand;
    const typeFiltered =
        !filterByType.length || !filterByType
            ? brandFiltered
            : filtrado(brandFiltered, filterByType);
    const priceFiltered =
        !filterByPrice.length || !filterByPrice
            ? typeFiltered
            : filtrado(typeFiltered, filterByPrice);
    return priceFiltered;
};

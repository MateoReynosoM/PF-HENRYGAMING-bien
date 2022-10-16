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
    function lengthCheck(arr1, arr2, arr3) {
        return Math.max(0, ...[arr1, arr2, arr3].map((s) => s.length));
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
    console.log(priceFiltered);
    return priceFiltered;
};

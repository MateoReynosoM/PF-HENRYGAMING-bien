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

// const arr1 = [
//     { id: 1, hola: "hola" },
//     { id: 2, chau: "chau" },
//     { id: 3, chau: "chau" },
//     { id: 4, chau: "chau" },
//     { id: 5, chau: "chau" },
//     { id: 6, chau: "chau" },
//     { id: 7, chau: "chau" },
//     { id: 8, chau: "chau" },
// ];
// const arr2 = [
//     { id: 1, hola: "hola" },
//     { id: 4, chau: "chau" },
//     { id: 5, chau: "chau" },
//     { id: 7, chau: "chau" },
//     { id: 1, hola: "hola" },
//     { id: 2, chau: "chau" },
//     { id: 3, chau: "chau" },
//     { id: 4, chau: "chau" },
//     { id: 5, chau: "chau" },
//     { id: 6, chau: "chau" },
//     { id: 7, chau: "chau" },
//     { id: 8, chau: "chau" },
// ];
// const arr3 = [
//     { id: 1, hola: "hola" },
//     { id: 4, chau: "chau" },
//     { id: 5, chau: "chau" },
//     { id: 7, chau: "chau" },
//     { id: 9, chau: "chau" },
// ];
// const arr4 = [];

// function filter(array1, array2) {
//     return array1.filter((object1) => {
//         return array2.some((object2) => {
//             return object1.id === object2.id;
//         });
//     });
// }
// function lengthCheck(arr1, arr2, arr3, arr4) {
//     return Math.max(0, ...[arr1, arr2, arr3, arr4].map((s) => s.length));
// }

// console.log(lengthCheck(arr4, arr4, arr4, arr4));

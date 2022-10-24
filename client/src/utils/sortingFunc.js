export function sortingFunc(option, arrayToSort) {
    let sortedArr = [];
    switch (option) {
        case "A-Z":
            sortedArr = arrayToSort.sort((a, b) => {
                if (a.model > b.model) {
                    return 1;
                }
                if (a.model < b.model) {
                    return -1;
                }
                return 0;
            });
            break;
        case "Z-A":
            sortedArr = arrayToSort.sort(function (a, b) {
                if (a.model < b.model) {
                    return 1;
                }
                if (a.model > b.model) {
                    return -1;
                }
                return 0;
            });
            break;
        case "Highest Price":
            sortedArr = arrayToSort.sort(function (a, b) {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
            break;
        case "Lowest Price":
            sortedArr = arrayToSort.sort((a, b) => {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
            });
            break;
        case "Id":
            sortedArr = arrayToSort.sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            break;
        default:
            sortedArr = arrayToSort;
            break;
    }
    return sortedArr;
}

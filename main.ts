import { quickSort } from "./lib";

const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];
let sortedArr: Array<number> = [];
try {
    sortedArr = quickSort(arr, 'asc');
} catch (e) {
    console.error(`failed to do quick sort: ${e}`);
    process.exit(1);
}

console.log(sortedArr);

if (JSON.stringify(sortedArr) !== JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
    throw new Error('Unsorted array');
}

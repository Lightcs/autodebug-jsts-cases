import { quickSort } from "./lib";
import { exit } from "process";

const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];
let sortedArr: Array<number> = [];
try {
    sortedArr = quickSort(arr, 'ascend');
} catch (e) {
    console.error(`failed to do quick sort: ${e}`);
    exit(1);
}

console.log(sortedArr);

if (JSON.stringify(sortedArr) !== JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
    throw new Error('Unsorted array');
}

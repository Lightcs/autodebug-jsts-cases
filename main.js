function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== Math.floor(arr.length / 2)) {
            continue;
        }

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];
const sortedArr = quickSort(arr);

console.log(sortedArr);

if (JSON.stringify(sortedArr) !== JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
    throw new Error('Unsorted array');
}

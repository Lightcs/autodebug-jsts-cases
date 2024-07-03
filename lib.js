module.exports.quickSort = function quickSort(arr, asc) {
    if (typeof asc !== 'boolean') {
        throw new Error('Invalid asc parameter');
    }

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }

        if ((asc && arr[i] < pivot) || (!asc && arr[i] > pivot)) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left, asc), pivot, ...quickSort(right, asc)];
}
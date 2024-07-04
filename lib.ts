export class Lib {
    public static QuickSort(arr: Array<number>, order: String): Array<number> {
        if (order !== 'asc' && order !== 'desc') {
            throw new Error('Invalid param');
        }
        const asc = order === 'asc';
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[Math.floor(arr.length / 2)];
        const left = new Array<number>();
        const right = new Array<number>();

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

        return [...this.quickSort(left, order), pivot, ...this.quickSort(right, order)];
    }
}

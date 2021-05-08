let quick_sort = (arr, left = 0, right = arr.length - 1) => {

    if (left >= right) return

    let i = left;
    let j = right - 1;
    let temp = arr[right]


    while (i < j) {
        while (arr[i] <= temp && i < j) {
            i++
        }
        while (arr[j] > temp && i < j) {
            j--
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }


    arr[right] = arr[i]
    arr[i] = temp

    quick_sort(arr, left, i - 1)
    quick_sort(arr, i + 1, right)

}


let arr = [1, 4, 2, 3, 5, 8, 3, 5]

quick_sort(arr)
console.log('object', arr)
//快速排序
function quick_sort (arr, l, r) {

console.log(arr.toString())

    if (l < r) {
        let i = l, j = r, tmp = arr[l]
        while (i < j) {
            while (i < j && arr[j] >= tmp) j--
            if (i < j) {
                arr[i++] = arr[j]
            }
            while (i < j && arr[i] < tmp) i++
            if (i < j) {
                arr[j--] = arr[i]
            }
        }
        arr[i] = tmp
        quick_sort(arr, l, i - 1) // 递归调用 
        quick_sort(arr, i + 1, r)
    }
}

let arr = [1, 3, 4, 9, 8, 3, 2, 7, 5]

quick_sort(arr, 0, arr.length - 1)

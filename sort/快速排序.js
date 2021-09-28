//快速排序
function quick_sort (arr, l, r) {

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



// function quickSort(arr) {
//     if(arr.length <= 1) {
//         return arr;  //递归出口
//     }
//     var left = [],
//         right = [],
//         current = arr.splice(0,1); //注意splice后，数组长度少了一个
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < current) {
//             left.push(arr[i])  //放在左边
//         } else {
//             right.push(arr[i]) //放在右边
//         }
//     }
//     return quickSort(left).concat(current,quickSort(right)); //递归
// }

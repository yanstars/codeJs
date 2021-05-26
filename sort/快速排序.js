let quick_sort = (arr, left = 0, right = arr.length - 1) => {

    if (left >= right) return

    let i = left
    let j = right - 1
    let temp = arr[right]  // 标量


    while (i < j) {
        while (arr[i] <= temp && i < j) {

            // 
            i++
        }
        // 找到左边一个大于tem的元素
        while (arr[j] > temp && i < j) {
            // 使得j扫过的元素都大于temp
            j--
        }
        // 找到右边第一个小于temp的元素
        if (i < j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        //  互换位置 如果哦i<j 继续扫描
    }


    arr[right] = arr[i]
    arr[i] = temp
    // 将temp放到i的位置

    // 分治 i左右的数组 递归处理

    quick_sort(arr, left, i - 1)
    quick_sort(arr, i + 1, right)

}


let arr = [1, 4, 2, 3, 5, 8, 3, 5]

quick_sort(arr)
console.log('object', arr)
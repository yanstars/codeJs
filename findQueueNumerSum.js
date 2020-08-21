// 数组内是否又连续字段和等于num

function sumStr (arr, num) {

    if (!arr.length)
        return false
    let sum, j

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i]
        j = i + 1
        while (sum <= num && j < arr.length) {
            if (sum == num) {
                return true
            }
            sum += arr[j++]
            if (sum > num) {
                break
            }
        }
    }

    return false
}


let arr = [1, 12, 3, 15, 6, 3, 16]
let result = sumStr(arr, 9)
console.log('result', result)

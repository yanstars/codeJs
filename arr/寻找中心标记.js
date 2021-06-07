// [1, 2, 8, 3, 9 ,2]   1+2+8 == 9+2=》3
// 返回中心元素的下标

function findCenterItem (arr) {

  let sum = arr.reduce((pre, cru) => pre + cru)

  for (let i = 0, count = 0, len = arr.length; i < len - 1; i++) {
    console.log('index :>> ', i)

    if (count == sum - count - arr[i]) {
      return i
    }
    if (count > sum - count - arr[i]) {
      return -1
    }
    count += arr[i]
  }
  return -1
}


console.log('findCenterItem :>> ', findCenterItem([1, 1, 1, 3, 9, 2]))
console.log('findCenterItem :>> ', findCenterItem([1, 2, 8, 3, 9, 2]))
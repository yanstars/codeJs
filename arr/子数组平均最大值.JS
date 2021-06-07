// TODO
// [1, 6, 3, 2, 0, 3, 4, 6, 8, 3, 3, 4]   K=3
// 滑动窗口
//  1 2  3 4   5
function maxAvage (list, len) {

  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += list[i]
  }
  let max = sum

  for (let i = len; i < list.length; i++) {
    sum = sum - list[i - len] + list[i]
    max = Math.max(sum, max)
  }

  return max / len

}
console.log('max :>> ', maxAvage([1, 6, 3, 2, 0, 3, 4, 6, 8, 3, 3, 4], 3))
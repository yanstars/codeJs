// TODO
// 暴力
// 二分查找
// 牛顿迭代    n*n = x       （ n+ x/n）/2  * （ n+ x/n）/2  ？ x

//  6==>2   2*2=4 3*3=9
//  24==>4   4*4=16  5*5=25


function sqrt (num) {

  for (let i = 1; i <= num; i++) {
    if (i ** 2 <= num && (i + 1) ** 2 > num) {
      return i
    }
  }
  return -1
}


function binary (num) {

  let index = -1, low = 0, high = num
  while (low <= high) {
    let mid = (high + low) >> 2
    if (mid ** 2 <= num) {
      index = mid
      mid++
    } else {
      high--
    }
  }
  return index
}


console.log('sqrt(6) :>> ', sqrt(24))
// TODO 暴力递归
//  递归的同时 缓存 sum（n）
//  双指针迭代




const map = {

}
function feci2 (num) {
  let result = 0
  if (num == 1) return 0
  if (num == 2) return 1

  if (map[num]) {
    result = map[num]
  }

  return map[num] = feci(num - 1) + feci(num - 2)
}



function feci (num) {
  if (num == 1) return 0
  if (num == 2) return 1

  return feci(num - 1) + feci(num - 2)
}
// 0,1,1,2,3,5,8     N=？

function feci3 (num) {

  if (num == 1) return 0
  if (num == 2) return 1
  let low = 0
  let high = 1

  for (let i = 3; i <= num; i++) {
    p = low + high
    low = high
    high = p
  }
  return high
}



console.time('start')
console.log('feci(50) :>> ', feci(15))
console.timeEnd('start')

console.time('start')
console.log('feci2(50) :>> ', feci2(15))
console.timeEnd('start')

console.time('start')
console.log('feci3(50) :>> ', feci3(15))
console.timeEnd('start')

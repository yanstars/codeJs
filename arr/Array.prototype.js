

function reserve (list) {
  let len = list.length
  let mid = len >> 1
  for (let i = 0; i < mid; i++) {
    [list[i], list[len - 1 - i]] = [list[len - 1 - i], list[i]]
  }
  return list
}


function nth (list, index) {
  return index >= 0 ? list[index] : list[list.length + index]
}




function map (list, cb) {
  if (!Array.isArray(list)) return []
  let result = []
  for (let i = 0; i < list.length; i++) {
    result[i] = cb(list[i], i, list)
  }
  return result
}


function reduce (list, cb, origin) {
  let i = origin ? 0 : 1
  origin = origin ? origin : list[0]
  for (i; i < list.length; i++) {
    origin = cb(origin, list[i], i, list)
  }
  return origin
}

console.log(
  reduce([1, 2, 3, 4], (pre, now) => pre + now, 5)

)
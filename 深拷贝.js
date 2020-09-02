

// 深拷贝
function deepClone (obj) {

    // 考虑其他各种数据类型
    // 对象的循环引用 set

    let result = Array.isArray(obj) ? [] : {}
    if (obj && "object" == typeof obj) {
        for (key in obj) {
            if (obj[key] && 'object' == typeof obj[key]) {
                result[key] = deepClone(obj[key])
            } else {
                result[key] = obj[key]
            }
        }
    }
    return result
}




let a = [undefined, NaN, 1, 2, 3, 4, null, { c: 2 }]
let b = deepClone(a)
b.push(66)
b[5].b = 5
console.log('b', b)
console.log('a', a)


// JSON.stringify

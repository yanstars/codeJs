

// 深拷贝
function deepClone (obj) {
    let result = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj == "object") {
        for (key in obj) {
            if (obj[key] && typeof obj[key] == 'object') {
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

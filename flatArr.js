
let testArr = [1, 3, [9, [8, [7]]], 2, [3, 4, [5, { a: 1 }, [6]]]]

console.log('testArr', testArr.flat(2))

// 字符串处理
// function flat (arr) {
//     arr = JSON.stringify(arr).replace(/\[|\]/g, '');
//     arr = '[' + arr + ']';
//     return JSON.parse(arr);
// }



// // console.log('', flat(testArr))
// Array api
// testArr.flat(1)
// console.log('test', testArr.flat(3))


// 递归指定维数

flatten.num = 0
function flatten (arr, deep, result = []) {
    flatten.num++

    for (let item of arr) {
        if (Array.isArray(item)) {
            if (flatten.num <= deep) {
                flatten(item, deep, result)
            } else {
                result.push(item)
                flatten.num = 1
            }
        } else {
            result.push(item)
        }
    }
    return result
}


console.log('testArr', flatten(testArr, 2))

//  递归
// function reduceDimension (arr) {
//     let ret = [];
//     let toArr = function (arr) {
//         arr.forEach(function (item) {
//             item instanceof Array ? toArr(item) : ret.push(item);
//         });
//     }
//     toArr(arr);
//     return ret;
// }




// 字符串序列化
// arr += '';
// arr = arr.split(',');



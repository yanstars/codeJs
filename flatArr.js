
function flat (arr) {
    arr = JSON.stringify(arr).replace(/\[|\]/g, '');
    arr = '[' + arr + ']';
    return JSON.parse(arr);
}



let testArr = [1, 2, [3, 4, [5, { a: 1 }, [6]]]]
// console.log('', flat(testArr))

testArr.flat(1)
console.log('test', testArr.flat(3))

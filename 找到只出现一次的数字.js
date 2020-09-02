let arr = [1, 2, 3, 2, 1, 5, 5, 5, 5]
let flag = 0
for (let i = 0; i < arr.length; i++) {
    flag ^= arr[i]

}

console.log('flag', flag)
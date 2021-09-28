var res = [];
let c = 0 
function permutation (arr, len, index) {
    c++
    console.log(c)
    if (len == index) {
        res.push(arr.slice());
    }
    for (var i = index; i < len; i++) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        permutation(arr, len, index + 1);
        [arr[i], arr[index]] = [arr[index], arr[i]];
       
    }
}
permutation([1, 2, 3], 3, 0);
// console.log(res);

// function permutation (arr) {
//     if (arr.length == 1)
//         return arr;
//     else if (arr.length == 2)
//         return [[arr[0], arr[1]], [arr[1], arr[0]]];
//     else {
//         var temp = [];
//         for (var i = 0; i < arr.length; i++) {
//             var save = arr[i];
//             arr.splice(i, 1);//取出arr[i]
//             var res = permutation(arr);//递归排列arr[0],arr[1],...,arr[i-1],arr[i+1],...,arr[n]
//             arr.splice(i, 0, save);//将arr[j]放入数组，保持原来的位置
//             for (var j = 0; j < res.length; j++) {
//                 res[j].push(arr[i]);
//                 temp.push(res[j]);//将arr[j]组合起来
//             }
//         }
//         return temp;
//     }
// }
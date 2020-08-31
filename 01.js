// /**
//  * @desc 01背包问题 原始代码
//  * @param {Number} w 背包的重量
//  * @param {Array} weightArr 每个物品的重量
//  * @param {Array} valArr 每个物品的价值
//  * 参考：https://segmentfault.com/a/1190000012829866
//  */
// var backpack = function (w, weightArr, valArr) {
//     // 物品数量，从0开始
//     let n = weightArr.length - 1
//     // 保存结果的二维数组
//     let tmpArr = [[]]
//     // 只有一个物品的情况
//     for (let a = 0; a <= w; a++) {
//         // 这个物品装不进去（边界情况）
//         if (a < weightArr[0]) {
//             tmpArr[0][a] = 0
//         } else {  // 这个物品可以装进去（边界情况）
//             tmpArr[0][a] = valArr[0]
//         }
//     }

//     // 有好几个物品的情况
//     // 循环背包容量
//     for (let j = 0; j <= w; j++) {
//         // 循环物品个数
//         for (let i = 1; i <= n; i++) {
//             // 创建新行
//             if (!tmpArr[i]) tmpArr[i] = []
//             // 最后一个装不进去，所以最大值为前i-1个的最大值
//             if (j < weightArr[i]) {
//                 tmpArr[i][j] = tmpArr[i - 1][j]
//             } else { // 最后一个能装进去，找装与不装的最大值
//                 tmpArr[i][j] = Math.max(tmpArr[i - 1][j], tmpArr[i - 1][j - weightArr[i]] + valArr[i])
//             }
//         }
//     }
//     return tmpArr
//     // console.log(tmpArr)
// }

// var backpack = function (w, weightArr, valArr) {
//     // 一共有几个商品
//     let n = weightArr.length
//     // 创建一共有n个元素的空数组，保存结果
//     let tmpArr = new Array(n)
//     .fill([]);
//     // 创建二位数组
//     // for (let a = 0; a < n; a++) tmpArr[a] = []

//     console.log('temArr', tmpArr)
//     // 循环物品
//     for (let i = 0; i < n; i++) {
//         // 循环背包容量（从0~w）
//         for (let j = 0; j <= w; j++) {
//             if (i === 0) {  // 只有一个物品时
//                 tmpArr[i][j] = j < weightArr[i] ? 0 : weightArr[i]
//             } else { // 有多个物品时，要根据以前最好的情况继续算
//                 tmpArr[i][j] = Math.max(tmpArr[i - 1][j], tmpArr[i - 1][j - weightArr[i]] + valArr[i])
//             }
//         }
//     }

//     // return tmpArr[n - 1][w]
//     return tmpArr
// }


console.log('object :>> ', backpack(12, [4, 6, 2, 2, 5, 1], [8, 10, 6, 3, 7, 2]));  
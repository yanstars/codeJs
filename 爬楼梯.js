/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (50.53%)
 * Likes:    1223
 * Dislikes: 0
 * Total Accepted:    281K
 * Total Submissions: 556.1K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 *
 */
// 4
// 1 + 1 + 1 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2


// 1 2 3 5 8 13   n ?
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
  let low = 0
  let high = 0
  let total = 1

   for (let i = 1; i <= n; ++i) {
    console.log('i :>> ', i);
      low = high;
      high = total;
      total = low + high;
  }
  return total;

  // 函数递归调用超时了
};

const num = 15

let result = climbStairs(num)





// const func = (n) => {
//   if (n <= 3) {
//       return n
//   } else {
//       return func(n - 2) + func(n - 1)
//   }
// }




// result = func(num)

console.log('result :>> ', result);



// @lc code=end

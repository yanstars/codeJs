/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (48.37%)
 * Likes:    588
 * Dislikes: 0
 * Total Accepted:    190.8K
 * Total Submissions: 394.4K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 *
 *
 *
 * 说明:
 *
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *
 *
 *
 * 示例:
 *
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出: [1,2,2,3,5,6]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// TODO   合并数组 并排序
// TODO   新建数组 arr1 arr2 从前至后比较并push进arr0
//    在arr1 末尾逆序比较最大值 append进arr1
var merge = function (nums1, m, nums2, n) {
  // let arrtem = nums1.slice(0, m)
  // let addarr = arrtem.concat(nums2.slice(0, n))
  // nums1 = addarr.sort((a, b) => { return a - b })

  let i = nums1.length - 1;
  m--;
  n--;
  while (n >= 0) {
    //   如果一个数组指针对应的数比  第二个数组的指针对应的数字大
    //   交互 第一个数组中有效最大值 到合适的位置
    //   m 指针向前移动
    while (m >= 0 && nums1[m] > nums2[n]) {
      [nums1[i], nums1[m]] = [nums1[m], nums1[i]];
      i--;
      m--;
    }
    [nums1[i], nums2[n]] = [nums2[n], nums1[i]];
    n--;
    i--;
  }

  console.log("num1", nums1);
};
// @lc code=end

// let arr2 = [1, 3, 5, 7, 9];
// let arr1 = [2, 4, 6, 8];

// let result = [];
// let tmp1 = arr1.shift();
// let tmp2 = arr2.shift();

// while (tmp1 || tmp2) {
//   if (tmp1 < tmp2 || tmp2 == undefined) {
//     result.push(tmp1);
//     tmp1 = arr1.shift();
//     continue;
//   }
//   if (tmp2 < tmp1 || tmp1 == undefined) {
//     result.push(tmp2);
//     tmp2 = arr2.shift();
//   }
// }

// console.log(result.toString());

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

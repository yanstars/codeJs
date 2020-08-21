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


            let tem = 0
            tem = nums1[i]
            nums1[i] = nums1[m]
            nums1[m] = tem
            i--
            m--
        }
        let tem = 0
        tem = nums1[i]
        nums1[i] = nums2[n]
        nums2[n] = tem
        n--;
        i--;
    }

};
// @lc code=end


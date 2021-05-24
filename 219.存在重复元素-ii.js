/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (40.30%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    59.8K
 * Total Submissions: 148.4K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的
 * 绝对值 至多为 k。
 *
 *
 *
 * 示例 1:
 *
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 *
 * 示例 2:
 *
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 *
 * 示例 3:
 *
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    // let i = 0
    // let length = nums.length
    // while (i < length - 1) {
    //     let j = i + 1
    //     while ((j - i) <= k && j < nums.length) {
    //         if (nums[i] == nums[j]) {
    //             return true
    //         }
    //         j++
    //     }
    //     i++
    // }
    // return false


    let map = new Map()
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i)
            continue
        }
        if ((i - map.get(nums[i])) <= k) {
            return true
        } else {
            map.set(nums[i], i)
        }
    }
    return false

};
// @lc code=end

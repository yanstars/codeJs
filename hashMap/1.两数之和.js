/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.16%)
 * Likes:    8875
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {


    //   map 
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(target - nums[i]) && (map.get(target - nums[i])) != i) {
    //         return [map.get(target - nums[i]), i]
    //     }
    //     map.set(nums[i], i)

    // }

    // 暴力破解 
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j]
    //         }
    //     }
    //   }


    // js对象 
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (String(target - nums[i]) in obj && (obj[String(target - nums[i])] != i)) {
            return [obj[String(target - nums[i])], i]
        }
        obj[String(nums[i])] = i

    }


    //TODO  有序数组  二分查找  
    //    for(let i ){
    //        let j  // 查找对象
    //    }
    // 

    
    //TODO  有序数组  头尾双指针



}
// @lc code=end


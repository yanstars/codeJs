/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (70.19%)
 * Likes:    1170
 * Dislikes: 0
 * Total Accepted:    308.4K
 * Total Submissions: 439K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode (val) {
    this.val = val;
    this.next = null;
}

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)


n1.next = n2
n2.next = n3

// log(n1)

// var reverseList = function (head) {

//     let temp; // 保存cur的下一个节点
//     let cur = head;
//     let pre = null;
//     while (cur) {
//         temp = cur.next;  // 保存一下 cur的下一个节点，因为接下来要改变cur->next
//         cur.next = pre; // 翻转操作
//         // 更新pre 和 cur指针
//         pre = cur;
//         cur = temp;
//     }
//     return pre;
// };


function reverse (pre, cur) {
    if (cur == NULL) return pre;
    temp = cur.next;
    cur.next = pre;
    // 可以和双指针法的代码进行对比，如下递归的写法，其实就是做了这两步
    // pre = cur;
    // cur = temp;
    return reverse(cur, temp);
}
function reverseList (head) {
    // 和双指针法初始化是一样的逻辑
    // ListNode* cur = head;
    // ListNode* pre = NULL;
    return reverse(NULL, head);
}



function log (head) {
    while (head) {
        console.log('head.next :>> ', head.val);
        head = head.next
    }
}

log(reverseList(n1))
// @lc code=end


package main

import "fmt"

func main() {
	node4 := &node{4, nil}
	node3 := &node{3, node4}
	node2 := &node{2, node3}
	node1 := &node{1, node2}
	node5 := &node{5, nil}
	log(*node1)

	nodeAppend(node2, node5)
	// node3.next = node1

	log(*node1)
	// isCircle := isCircleNode(*node1)
	// fmt.Println(isCircle)
}

type node struct {
	value int
	next  *node
}

// 1==>2==>3
// 追加节点
func nodeAppend(head *node, item *node) {
	item.next = head.next
	head.next = item
}

// 快慢指针
func hasCycle(head *node) bool {
	fast := head
	slow := head
	for slow != nil && fast != nil && fast.next != nil {
		fast = fast.next.next
		slow = slow.next
		if fast == slow {
			return true
		}
	}
	return false
}

// 是否是环形链表 hashMap
func isCircleNode(head *node) bool {
	myMap := make(map[int]int)
	for head.next != nil {
		if myMap[head.value] == head.value {
			return true
		}
		myMap[head.value] = head.value
		head = head.next
	}
	return false
}

// 遍历打印 node
func log(head node) {
	for head.next != nil {
		fmt.Println(head.value)
		head = *head.next
	}
}

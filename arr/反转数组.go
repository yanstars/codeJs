package main

import "fmt"

func reserve(list []int) []int {
	var len = len(list)
	var mid = len >> 1
	for i := 0; i < mid; i++ {
		list[i], list[len-1-i] = list[len-1-i], list[i]
	}
	return list
}

func main() {
	var list = []int{1, 2, 3, 4, 5}
	result := reserve(list)
	fmt.Printf("%v", result)
}

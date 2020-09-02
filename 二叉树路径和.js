function node (value) {
    this.value = value
    this.left = null
    this.right = null

}

//       1
//    5     4
//  2      8  3
let node1 = new node(1)
let node5 = new node(5)
let node2 = new node(2)

let node4 = new node(4)
let node8 = new node(8)
let node3 = new node(3)
let node7 = new node(7)

node1.left = node5
node1.right = node4
node5.left = node2
node4.left = node8
node4.right = node3
node2.left = node7





function FindPath (root, expectNumber) {
    const result = [];
    if (root) {
        FindPathCore(root, expectNumber, [], 0, result);
    }
    return result;
}

function FindPathCore (node, expectNumber, stack, sum, result) {
    stack.push(node.value);
    sum += node.value;
    // if (!node.left && !node.right && sum === expectNumber) {
    //     result.push(stack.slice(0));
    // }

    if (sum === expectNumber) {
        result.push(stack.slice(0));
        stack.pop();
        return
    }
    if (node.left) {
        FindPathCore(node.left, expectNumber, stack, sum, result);
    }
    if (node.right) {
        FindPathCore(node.right, expectNumber, stack, sum, result);
    }
    stack.pop();
}


let result = FindPath(node1, 8)
console.log('8', result)

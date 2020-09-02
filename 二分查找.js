const find = (arr, left, right, target) => {

    if (arr.length >= 0 & arr.length <= 2) {
        if (arr[left] && arr[left] == target) {
            return left
        } else if (arr[right] && arr[right] == target) {
            return right
        } else {
            return -1
        }
    }

    let midIndex = Math.floor((left + right) / 2)

    if (target > arr[midIndex]) {
        return find(arr, midIndex + 1, right, target)
    } else if (target < arr[midIndex]) {
        return find(arr, left, midIndex, target)
    } else {
        return midIndex
    }
}


let arr = [2, 14]
let index = find(arr, 0, arr.length - 1, 14)

console.log('index', index)






// let arr = [];

// //  num 最低楼

// //  MaxFloor  最高楼层数

// //  tep 刚好摔碎的楼层数

// getFloorNuM.count = 0;

// function getFloorNuM (num, MaxFloor, tep) {

//     getFloorNuM.count++;
//     let tepFloorNum = Math.ceil((MaxFloor + num) / 2);
//     if (num == 1 && tepFloorNum == 2) {
//         return ++getFloorNuM.count;
//     }
//     if (tep < tepFloorNum) {
//         return getFloorNuM(num, tepFloorNum, tep);
//     } else if (tep > tepFloorNum) {
//         return getFloorNuM(tepFloorNum, MaxFloor, tep);
//     } else {
//         return getFloorNuM.count;
//     }
// }

// for (let i = 2; i <= 100; i++) {

//     getFloorNuM.count = 0;

//     arr.push(getFloorNuM(1, 100, i));

// }

// console.log('arr', arr);


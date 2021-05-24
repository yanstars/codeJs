let arr = [1, 2, 3, 2, 1, 5, 5, 5, 5]


function getNum (arr) {
    let flag = 0
    for (let i = 0; i < arr.length; i++) {
        flag ^= arr[i]
    }
    return flag
}



// function getNumFromMap (list) {
//     let map = new Map()
//     list.forEach(element => {
//         if (!map.get(element)) {
//             map.set(element, element)
//         } else {
//             map.delete(element)
//         }
//     })

//     for (let [i, j] of map) {
//         console.log('is :>> ', i)
//     }
// }
// getNumFromMap(arr)


// 打印指定层数倒置等腰三角形

// print(n)  =>

//  * *  *  *  * 
//    *  *  *
//       *   


function myLog (n) {
    for (let i = n; i >= 1; i--) {
        let rowArr = []
        for (let j = 0; j < n - i; j++) {
            rowArr.push("   ")
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            rowArr.push(" 0 ")
        }
        console.log('...rowArr :>> ', ...rowArr);
    }
}

myLog(4)
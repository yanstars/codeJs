
// Array.prototype.sort
let arr = ['1.1.1', '2.301.3', '0.0.1', '1.0.3', '4.4.1', '4.4.1.5'];
arr.sort(function (a, b) { return a < b ? -1 : 1; });
console.log('arr', arr)


// 使用的是选择排序
const versionSort = version => {
    const temp = version.map(v => v.split('.'));
    for (let i = 0; i < temp.length; i++) {

        let minIndex = i;
        for (let j = i; j < temp.length; j++) {

            // 比较单个版本号大小
            for (let k = 0; k < temp[j].length; k++) {
                const current = +temp[j][k],
                    min = +temp[minIndex][k];
                if (current < min) {
                    minIndex = j;
                }
                // 只要不等，就立刻结束最内层遍历！
                if (current !== min) {
                    break
                }
            }
        }
        [temp[i], temp[minIndex]] = [temp[minIndex], temp[i]];
    }
    return temp.map(v => v.join('.'))
};

const version1 = ['1.45.0', '1.5', '6', '3.3.3.3.3'];
console.log(versionSort(version1));
// ["1.5", "1.45.0", "3.3.3.3.3", "6"]

const version2 = ['0.1.1', '2.3.3', '0.3002.1', '4.2', '4.3.5', '4.3.4.5'];
console.log(versionSort(version2));
  // ["0.1.1", "0.3002.1", "2.3.3", "4.2", "4.3.4.5", "4.3.5"]

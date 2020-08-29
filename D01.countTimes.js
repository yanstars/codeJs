/**
* 统计数组中每个字符串出现次数
* @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
* @return {[key: string]: number} 出现次数Map, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
*/


let frequencyMap = strs => {
    let map = new Map()
    let result = {}

    strs.forEach(item => {
        if (map.get(item)) {
            let value = map.get(item)
            map.set(item, ++value)
        } else {
            map.set(item, 1)
        }
    });


    map.forEach((item, key) => {
        result[key] = item
    })

    return result
}


let strArr = ['aa', 'ab', 'ab', 'cc', 'cba']

console.log(frequencyMap(strArr))
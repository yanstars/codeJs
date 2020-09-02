/**
    * 请处理给定字符串:
    *   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
    *   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格
    * @param str: 字符串, 例 "I'm我我我driving是to乱乱Beijing码after breakfast88"
    * @return str: 例 "I'm driving to Beijing after breakfast "
    */


let decode = str => {
    if (!str.length) return
    function type (num) {
        // 65 -90  96-122  32
        if (97 <= num && num <= 122) {
            return true
        }
        if (65 <= num && num <= 90) {
            return true
        }
        if (num == 32 || num == 39) {
            return true
        }
        return false
    }

    let arr = []
    let start = 0;
    let end = 0;
    let result = ''

    for (let i = 0; i <= str.length; i++) {
        if (!type(str.charCodeAt(i - 1)) && type(str.charCodeAt(i))) {
            start = i
        }
        if (type(str.charCodeAt(i)) && !type(str.charCodeAt(i + 1))) {
            end = i + 1
            arr.push(str.slice(start, end))
        }
    }

    arr.forEach(item => {
        result += item + ' '
    })
    return result.trim()
}

let str = "I'm我我我driving是to乱乱Beijing码after breakfast88"
console.log(decode(str))
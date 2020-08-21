var reverseString = function (s) {
    let i = 0;
    let j = s.length - 1
    while (j > i) {
        let temp = 0
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        j--;
        i++;
    }
    console.log('s', s)

};

reverseString(['a', 'b', 'c', 'd'])



let str = 'abcdef'
let result = str.split('').reverse().join('')
console.log('str', result)
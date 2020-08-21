
var arr = ['1.1.1', '2.301.3', '0.0.1', '1.0.3', '4.4.1', '4.4.1.5'];
arr.sort(function (a, b) { return a < b ? -1 : 1; });
console.log('arr', arr)
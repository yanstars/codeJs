const arr = [3, 2, 4, 9, 32, 21, 22, 0];

// console.log(arr.sort());

var MergeSort = function (arr) {
  if (!arr.length) return;
  let result = mergeSort(arr, 0, arr.length - 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
  return arr;
};
/**
 * 二分分割数组
 * @param {[Number]} arr
 * @param {Number} start
 * @param {Number} end
 * @returns
 */
var mergeSort = function (arr, start, end) {
  // 只剩下一个数字，停止拆分
  if (start == end) {
    console.log("split", arr[start], "\n");
    return [arr[start]];
  }
  let mid = Math.floor((start + end) / 2);
  let left = mergeSort(arr, start, mid);
  let right = mergeSort(arr, mid + 1, end);
  return merge(left, right);
};
/**
 * 合并两个有序数组
 * @param {[Number]} arr1
 * @param {[Number]} arr2
 */
var merge = function (arr1, arr2) {
  let result = new Array(arr1.length + arr2.length);
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    result[i + j] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++];
  }
  while (i < arr1.length) {
    result[i + j] = arr1[i++];
  }
  while (j < arr2.length) {
    result[i + j] = arr2[j++];
  }
  console.error("merge", result, "\n");
  return result;
};
console.log(MergeSort(arr));


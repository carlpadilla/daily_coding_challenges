// 7KYU -  Find the first non-consecutive number

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6

// 7KYU - Sort with a sorting array

function sort(initialArray, sortingArray) {
  const result = Array(initialArray.length);
  sortingArray.forEach((x, i) => (result[x] = initialArray[i]));
  return result;
}

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])); //[1, 3, 2, 5, 4]

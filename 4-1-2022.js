function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

console.log(mergeArrays([8, 1, 2, 3, 4], [1, 5, 6, 7, 8, 10]));

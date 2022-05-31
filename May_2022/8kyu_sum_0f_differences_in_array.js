/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

const sumOfDifferences = (arr) => {
  if (arr.length <= 1) {
    return 0
  }

  return Math.max(...arr) - Math.min(...arr)
}

//My solution works but timesout
// function sumOfDifferences(arr) {
//   let i = 0
//   let sum = 0
//   //sort array from greatest to least
//   arr.sort((a, b) => b - a)
//   //check for empty array
//   if (arr === []) {
//     return 0
//   } else {
//     while (i !== arr.length - 1) {
//       sum = sum + (arr[i] - arr[i + 1])
//       i += 1
//     }
//     return sum
//   }
// }

console.log(sumOfDifferences([1, 2, 10]))
console.log(sumOfDifferences([-3, -2, -1]))

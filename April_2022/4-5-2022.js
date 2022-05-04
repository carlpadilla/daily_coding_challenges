//8 kyu - Beginner - Lost Without a Map

/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


*/

// function maps(x) {
//   return x.map((x) => x * 2);
// }

//One liner
const maps = (x) => x.map((x) => x * 2);

console.log(maps([1, 2, 3]));

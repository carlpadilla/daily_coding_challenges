/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

function between(a, b) {
  // your code here
  const arr = [];
  for (let i = a; i < b + 1; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(between(1, 4));
console.log(between(-2, 2));

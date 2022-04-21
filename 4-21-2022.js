//8kyu - Reversed Words

/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"



*/

const reverseWords = (str) => str.split(" ").reverse().join(" "); // reverse those words

console.log(reverseWords("hello world!"));

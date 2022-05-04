//7kyu- Simple string characters

/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.

Good luck!

*/

function solve(s) {
  return [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map((rgx) => s.split(rgx).length - 1)
}

console.log(solve("Codewars@codewars123.com")) //[1,18,3,2]

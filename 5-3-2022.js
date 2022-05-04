// 7KYU - Vowel Count

/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


*/

const getCount = (str) => (str.match(/[aeiou]/gi) || []).length

console.log(getCount("carlo"))
console.log(getCount("my pyx"))

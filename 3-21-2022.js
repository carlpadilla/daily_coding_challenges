// 8kyu - Count Odd Numbers below n
//Given a number n, return the number of positive odd numbers below n, EASY!

// The Math.floor() function returns the largest integer less than or equal to a given number.

const oddCount = (n) => Math.floor(n / 2);

oddCount(7); //=> 3, i.e [1, 3, 5]
oddCount(15); //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]

//--------------------------------------------------------------------------------

//8kyu - Sentence Smash
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// function smash(words) {
//   return words.join(' ');
// }
const smash = (words) => words.join` `;

smash(['hello', 'world', 'this', 'is', 'great']); // =>  'hello world this is great'

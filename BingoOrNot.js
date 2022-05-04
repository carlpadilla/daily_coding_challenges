// 7KYU - Bingo ( Or Not )

/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

*/

function bingo(a) {
  // your winning code here
  const bingo = [2, 9, 14, 7, 15]
  const winner = bingo.every((bing) => {
    return a.includes(bing)
  })
  if (winner) {
    return "WIN"
  } else {
    return "LOSE"
  }
}

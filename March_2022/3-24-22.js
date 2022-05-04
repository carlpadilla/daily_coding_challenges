//7kyu - Character Counter

// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

function validateWord(s) {
  //p:a string of letters
  //r: a boolean
  //e: validateWord("abcabc")
  //p: will iterate over the string and somehow compare the current element to the next
  // this will be accomplished using array map and then another map
  //
  let numOfSameNums = s
    .toLowerCase()
    .split('')
    .map((el, i, arr) => arr.filter((comp) => comp == el).length);

  return numOfSameNums.every((el, i, arr) => arr.every((num) => num == el));

  //Code goes here!
}

console.log(validateWord('abcabc')); //true
console.log(validateWord('abcabcd')); //false

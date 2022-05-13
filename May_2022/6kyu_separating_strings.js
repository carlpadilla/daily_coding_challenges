function sepStr(str) {
  let sepArr = []
  let words = str.split(" ")

  // find longest word to know how many times to repeat cycle
  let longestLen = 0
  for (let word of words) {
    if (word.length > longestLen) {
      longestLen = word.length
    }
  }

  // iterate over the array of words however many times to get every letter of the longest word
  for (let i = 0; i < longestLen; i++) {
    // make a new array for each row / index
    let rowStr = []
    for (let word of words) {
      // if haven't gone past the length of a word, add the letter at that index to the array and remove it from the word
      if (word[i] !== undefined) {
        rowStr.push(word[i])
      } else {
        // if we have gone past the length of a word, push in an empty string
        rowStr.push("")
      }
    }
    // add the array of letters to the whole array
    sepArr.push(rowStr)
  }

  return sepArr
}

console.log(sepStr("Just Live Life Man"))
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);

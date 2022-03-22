// 7kyu - Filter Long Words
//Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

function filterLongWords(sentence, n) {
  //Solution here
  // take the sentence and split it into an array of words
  // filter the array to only words that are longer than n
  // return the filtered array
  return sentence.split(' ').filter((x) => x.length > n);
}

const filter = filterLongWords('The quick brown fox jumps over the lazy dog', 4); //Return ['quick', 'brown', 'jumps']

console.log(filter);

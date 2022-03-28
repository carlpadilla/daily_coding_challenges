//7kyu - Case Swap
//Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS

function swap(str) {
  // new Array to push case swapped letters into
  const newStr = [];
  //split the word into separate letters array
  const split = str.split('');

  //loop through letters
  for (let i = 0; i < split.length; i++) {
    //Check if letter is capitalized
    if (split[i].toUpperCase() === split[i]) {
      //push cap letter lowercase into new array
      newStr.push(split[i].toLowerCase());
    } else {
      //push lower case letter capitalized into new array
      newStr.push(split[i].toUpperCase());
    }
  }
  // join letters back in word to return

  return newStr.join('');
}
const swapped = swap('CodEwArs');

console.log(swapped);

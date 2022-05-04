//8kyu -Name Shuffler

/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"


*/

function nameShuffler(str) {
  //Shuffle It
  let [fName, lstName] = str.split(" ");
  return `${lstName} ${fName}`;
}

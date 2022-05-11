/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb". 
*/

function findChildren(dancingBrigade) {
  let arr = dancingBrigade.split("").sort()
  console.log("arr:", arr)
  let capitals = []

  for (i = arr.length - 1; i >= 0; i--) {
    //loop backwards to remove and iterate at same time
    if (arr[i] === arr[i].toUpperCase()) {
      capitals.push(arr.splice(i, 1).toString())
    }
  }
  for (i = 0; i < capitals.length; i++) {
    let capLetter = capitals[i].toLowerCase()
    if (arr.indexOf(capLetter) !== -1) {
      arr.splice(arr.indexOf(capLetter), 0, capitals[i])
    }
  }
  return arr.join("")
}
console.log(findChildren("abBA"))

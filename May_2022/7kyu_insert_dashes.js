//7kyu- insert dashes

/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/

//Regex
/*
function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}
*/

//my solution
function insertDash(num) {
  const numArr = Array.from(String(num))
  const result = []
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 > 0 && numArr[i + 1] % 2 > 0) {
      result.push(numArr[i], "-")
    } else {
      result.push(numArr[i])
    }
  }
  return result.join("")
}

console.log(insertDash(454793)) //'4547-9-3'

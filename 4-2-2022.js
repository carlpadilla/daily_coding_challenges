// 8KYU -Remove First and Last Character Part Two

/*
Example:
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"
*/

const array = (arr) => {
  arr = arr.split(",");
  arr.pop();
  arr.shift();
  return arr.join(" ") === "" ? null : arr.join(" ");
};

// same result but didnt pass tests..
// function array(arr) {
//   //Good luck
//   const convertArr = arr.split(",");
//   const popLast = convertArr.pop();
//   const removeFirst = convertArr.shift();
//   return convertArr.toString().replaceAll(",", " ");
// }

console.log(array("1,2,3")); // '2'
console.log(array("1,2,3,4")); //'2,3'

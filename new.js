function isNice(arr) {
  if (arr.length === 0) {
    return false;
  }
  return arr.every((el) => arr.includes(el + 1) || arr.includes(el - 1));
}
let nice = isNice([2, 10, 9, 3]);

// if (arr[i] + 1 === arr[i] || arr[i] - 1 === arr[i]) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }

console.log(nice);

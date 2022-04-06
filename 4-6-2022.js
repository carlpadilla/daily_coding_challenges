//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const multi = (arr) => {
  const newArr = [];

  arr.forEach((num) => {
    console.log(num);
    if (num % 2 === 0) {
      newArr.push(num);
    }
  });
  return newArr;
};

console.log(multi([1, 2, 3, 4]));

//7 KYU - Dot Calculator

function dotCalculator(equation) {
  let arr = equation.split(" ");
  console.log(arr);
  switch (arr[1]) {
    case "+":
      return ".".repeat(arr[0].length + arr[2].length);
    case "-":
      return ".".repeat(arr[0].length - arr[2].length);
    case "*":
      return ".".repeat(arr[0].length * arr[2].length);
    case "//":
      return ".".repeat(arr[0].length / arr[2].length);

    default:
      break;
  }
  return "...";
}

function countPositivesSumNegatives(input) {
  const positiveArr = []
  const negativeArr = []
  if (input === null || input.length === 0) {
    return []
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveArr.push(input[i])
    } else if (input[i] < 0) {
      negativeArr.push(input[i])
    }
  }

  return [positiveArr.length, negativeArr.reduce((a, c) => a + c, 0)]
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
)

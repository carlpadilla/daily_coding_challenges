function partsSums(ls) {
  let sum = ls.reduce((sum, n) => sum + n, 0)
  res = [sum]

  for (let i = 1; i <= ls.length; i++) {
    sum -= ls[i - 1]
    res.push(sum)
    // console.log(sum);
  }
  return res
}

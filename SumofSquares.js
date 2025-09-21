/*
-------------------------------------------------
📝 Problem:Sum of Squares
-------------------------------------------------
Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/
function sumOfSquares(n) {
  if (n == 0) {
    return 0
  }
  return n ** 2 + sumOfSquares(n-1)
}

sumOfSquares(5)


// ------------------------------------------------

function sumOfSquares(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum = sum + i ** 2
  }
  return sum
}

sumOfSquares(5)
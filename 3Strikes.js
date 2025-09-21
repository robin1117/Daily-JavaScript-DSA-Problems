/*
-------------------------------------------------
📝 Problem:3 Strikes
-------------------------------------------------
3 Strikes
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/



function squaresWithThree(n) {
  let counter = 0
  for (let i = 1; i <= n; i++) {
    if ((i ** 2).toString().includes(3)) {
      counter++
    }
  }
  return counter.toString()
}

console.log(squaresWithThree(1000))
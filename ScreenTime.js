/*
-------------------------------------------------
📝 Problem:Screen Time
-------------------------------------------------
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function tooMuchScreenTime(hours) {
  if (hours.some((ele) => ele >= 10)) return true

  for (let i = 0; i <= 6; i++) {
    let sumOfThree = hours[i] + hours[i + 1] + hours[i + 2]
    if (sumOfThree >= 24) return true
  }

  let totalSum = hours.reduce((acc, ele, next) => {

    return acc + ele
  }, 0)
  if (totalSum >= 42) return true

  return false

}

console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]))
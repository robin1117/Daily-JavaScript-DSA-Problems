/*
-------------------------------------------------
📝 Problem:Targeted Sum
-------------------------------------------------
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function findTarget(arr, target) {

  let indexArr = []
  let next = arr.reduce((acm, cur, i) => {

    if (acm + cur == target) {
      indexArr = [i - 1, i]
    }
    return cur

  })
  if (indexArr.length == 0) {
    return "Target not found"
  }

  return indexArr;
}

findTarget([1, 3, 5, 7], 14)
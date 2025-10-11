/*
-------------------------------------------------
📝 Problem:Array Duplicates
-------------------------------------------------
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function findDuplicates(arr) {
  let result = [];
  arr.forEach((ele, i) => {
    //1

    arr.forEach((ele2, j) => {
      if (ele == ele2 && i != j && !result.includes(ele2)) {
        result.push(ele2);
      }
    });
  });
  return result.sort((a, b) => a - b);
}

findDuplicates([
  2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
]); //[-6, 0, 2, 4, 5, 23]

// ===================================================
function findDuplicates(arr) {
  const count = new Map();
  const result = [];

  for (let num of arr) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  for (let [num, freq] of count) {
    if (freq > 1) result.push(num);
  }

  return result.sort((a, b) => a - b);
}

console.log(
  findDuplicates([
    2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
  ])
);

/*
-------------------------------------------------
📝 Problem: Find Missing Numbers in an Array
-------------------------------------------------
Given an array of numbers, find the missing numbers
between the smallest and largest values.

Example:
Input: [2, 6, 7, 8]
Output: [3, 4, 5]
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function findMissingNumbers(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter(
    (num) => !arr.includes(num)
  );
}

// Test Cases
console.log(findMissingNumbers([2, 6, 7, 8])); // [3, 4, 5]

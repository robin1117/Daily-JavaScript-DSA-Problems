/*
-------------------------------------------------
📝 Problem: Fibonacci Sequence
-------------------------------------------------
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function fibonacciSequence(startSequence, length) {
  if (length == 0) {
    return [];
  }
  if (length == 1) {
    return [startSequence[0]];
  }
  if (length == 2) {
    return startSequence;
  }

  let arr = [...startSequence];
  for (let i = 0; i < length - 2; i++) {
    let x = arr[i] + arr[i + 1];
    arr.push(x);
  }
  return arr;
}

console.log(fibonacciSequence([0, 1], 20));

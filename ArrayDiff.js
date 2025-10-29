/*
-------------------------------------------------
📝 Problem:Array Diff
-------------------------------------------------
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function arrayDiff(arr1, arr2) {

  let a = new Set(arr1)
  let b = new Set(arr2)



  return (([...a.difference(b), ...b.difference(a)]).sort())


}

arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])
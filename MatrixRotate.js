/*
-------------------------------------------------
📝 Problem: Matrix Rotate

-------------------------------------------------
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2


-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-----*/

function rotate(matrix) {
  let arr = matrix.reverse()
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i]
    // console.log(row)
    for (let j = 0; j < row.length; j++) {
      if (!obj[j]) {
        obj[j] = []
      }
      obj[j].push(row[j])
    }
  }

  return Object.values(obj)

}

rotate([[1, 2], [3, 4]])
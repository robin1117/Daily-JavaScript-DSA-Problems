/*
-------------------------------------------------
📝 Problem:Tribonacci Sequence
-------------------------------------------------
Tribonacci Sequence
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

Your function should handle sequences of any length greater than or equal to zero.
If the length is zero, return an empty array.
Note that the starting numbers are part of the sequence.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function tribonacciSequence(startSequence, length) {
    if (length == 0) {
        return []
    }
    if (length == 1) {
        return startSequence.slice(0, 1)
    }
    if (length == 2) {
        return startSequence.slice(0, 2)
    }
    if (length == 3) {
        return startSequence
    }

    let finelArr = [].concat(startSequence)

    for (let i = 0; finelArr.length != length; i++) {
        finelArr.push(eval(finelArr.slice(0 + i, 3 + i).join('+')))

    }

    return finelArr;
}

tribonacciSequence([0, 0, 1], 5) //[0,0,1,1,2]


// ✅ Logic — correct
// ⚠️ eval() — not recommended
// finelArr.push(finelArr[i] + finelArr[i + 1] + finelArr[i + 2]);
// ✨ Readability — can be improved with shorter conditions and cleaner syntax
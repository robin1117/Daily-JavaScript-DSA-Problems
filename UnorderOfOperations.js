/*
-------------------------------------------------
📝 Problem:Unorder of Operations
-------------------------------------------------
Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function returnSign(operatorArr, index) {
    let len = operatorArr.length
    let sign = operatorArr[index % len]
    return sign
}
// console.log(eval(5 + (returnSign(['+', '-'], 0)) + 6))

function evaluate(numbers, operators) {
    let sum = numbers.reduce((ac, nex, index) => {
        return eval(ac + (returnSign(operators, index - 1)) + nex)
    })

    return sum
}

evaluate([33, 11, 29, 13], ['/', '-'])
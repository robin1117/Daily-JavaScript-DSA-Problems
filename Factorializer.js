/*
-------------------------------------------------
📝 Problem:Factorializer
-------------------------------------------------
Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

The factorial of zero is 1.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function factorial(n) {

  if (n == 0) {
    return 1
  }

  return n * factorial(n - 1)

}

factorial(3)
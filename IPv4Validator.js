/*
-------------------------------------------------
📝 Problem:IPv4 Validator
-------------------------------------------------
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function isValidIPv4(ipv4) {
  let conditionArr = ipv4.split(".")

    .every((ele) => {
      
      if (!ipv4.includes('.')) return 0

      if (isNaN(parseInt(ele))) return 0

      if (!(/^(0|[1-9]\d*)$/.test(ele))) return 0

      if (ele < 256 && ele >= 0) return 1

      return 0
    })

  return(conditionArr)
}

isValidIPv4("0.0.0.0")
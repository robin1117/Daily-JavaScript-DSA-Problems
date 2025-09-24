/*
-------------------------------------------------
📝 Problem:Message Decoder
-------------------------------------------------
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function decode(message, shift) {
  //65 --- 90 && 97 --- 122
  // formula we uses to shift range 
  // decodedCode = (charCode - base - shift + 26) % 26 + base

  let strArr = message.split("")

  let newArr = strArr.map((ele) => {

    //for upperCase
    if (ele.charCodeAt(0) >= 65 & ele.charCodeAt(0) <= 90) {
      let decodedCode = (ele.charCodeAt(0) - 65 - shift + 26) % 26 + 65
      return String.fromCharCode(decodedCode)
    }
    if (ele.charCodeAt(0) >= 97 & ele.charCodeAt(0) <= 122) {
      let decodedCode = (ele.charCodeAt(0) - 97 - shift + 26) % 26 + 97
      return String.fromCharCode(decodedCode)
    }
    return ele
  })




  return newArr.join('')

}

decode('Xlmw mw e wigvix qiwweki.', 20)
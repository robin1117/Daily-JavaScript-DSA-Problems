/*
-------------------------------------------------
📝 Problem:camelCase
-------------------------------------------------
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function toCamelCase(s) {
  let newArr = s.split(/[_-\s]+/gi)

  let ns = newArr.map((word, index) => {
    if (index == 0) {
      return word[0].toLowerCase() + word.slice(1).toLowerCase()
    }
  
    else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
re
  }).join('')
  console.log(ns)
  return ns

}

toCamelCase("FREE cODE cAMP")
/*
-------------------------------------------------
📝 Problem: Pangram
-------------------------------------------------
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function isPangram(sentence, letters) {

  let sen = new Set(sentence.toLowerCase().match(/[\w]/g))
  let lett = new Set(letters.toLowerCase().match(/[\w]/g))

  
  return sen.size == lett.size
}
isPangram("Hello World!", "heliowrd")
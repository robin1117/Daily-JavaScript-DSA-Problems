/*
-------------------------------------------------
📝 Problem:Longest Word
-------------------------------------------------
Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/



function getLongestWord(sentence) {
  let saveWord = ''
  sentence.match(/\w+/g).forEach((word) => {
    if (word.length > saveWord.length) saveWord = word

  })
  return saveWord
}

getLongestWord("Coding challenges are fun and educational.")

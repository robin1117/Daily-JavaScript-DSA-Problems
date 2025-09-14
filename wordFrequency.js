/*
-------------------------------------------------
📝 Problem: Word Frequency
-------------------------------------------------
Word Frequency
Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first..
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/



function getWords(paragraph) {

  let countObj = {}
  let arr = paragraph.replace(/[^\w\s]/g, "").split(" ");

  arr.forEach((word) => {
    if (!(word.toLowerCase() in countObj)) {
      countObj[word.toLowerCase()] = 1

    }
    else {
      countObj[word.toLowerCase()]++
    }
  })
  let entries = Object.entries(countObj).sort((a, b) => b[1] - a[1]).slice(0, 3).map((nestedArr) => nestedArr[0])
  
  return entries
}

getWords("I like coding. I like testing. I love debugging!")
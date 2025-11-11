/*
-------------------------------------------------
📝 Problem:Vowels and Consonants
-------------------------------------------------
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function count(str) {
    let tester = ["a", "e", "i", "o", "u"]
    let vowels = 0
    let consonent = 0
    str.match(/[a-z]|[A-Z]/gm).forEach((e, i) => {
        if (tester.includes(e)) {
            vowels++
        }
        else {
            consonent++
        }
    })
    return [vowels, consonent]
}

count("Hello World")

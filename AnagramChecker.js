/*
-------------------------------------------------
📝 Problem:Anagram Checker
-------------------------------------------------
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function areAnagrams(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (!str1.toLowerCase().includes(str2[i].toLowerCase())) {
      return false;
    }
  }

  return true;
}

areAnagrams("listen", "silent");

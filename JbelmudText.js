/*
-------------------------------------------------
📝 Problem:Base Jbelmud Text
-------------------------------------------------
Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/
function jbelmu(text) {
  let arr = text.split(" ").map((ele) => {
    if (ele.length == 1) {
      return ele;
    }
    return (
      ele[0] +
      ele
        .slice(1, ele.length - 1)
        .split("")
        .sort()
        .join("") +
      ele[ele.length - 1]
    );
  });

  return arr.join(" ");
}

jbelmu("i love jbelmud text");

/*
-------------------------------------------------
📝 Problem:RGB to Hex
-------------------------------------------------
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/
function rgbToHex(rgb) {
  let hex = rgb.match(/\d+/g).reduce((acc, nxt) => {
    return acc + Number(nxt).toString(16).padStart(2,0)
  }, "#")

return hex
}

rgbToHex("rgb(255, 255, 255)")
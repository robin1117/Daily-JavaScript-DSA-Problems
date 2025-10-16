/*
-------------------------------------------------
📝 Problem: Hex Generator

-------------------------------------------------
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function generateHex(color) {
  let a = 255;
  let red =
    color.toLowerCase() == "red"
      ? 255
      : Math.floor(Math.random() * (255 - 1 + 1)) + 1;
  let green =
    color.toLowerCase() == "green"
      ? 255
      : Math.floor(Math.random() * (255 - 1 + 1)) + 1;
  let blue =
    color.toLowerCase() == "blue"
      ? 255
      : Math.floor(Math.random() * (255 - 1 + 1)) + 1;

  if (
    color.toLowerCase() == "red" ||
    color.toLowerCase() == "green" ||
    color.toLowerCase() == "blue"
  ) {
    return `${red.toString(16).padStart(2, 0)}${green
      .toString(16)
      .padStart(2, 0)}${blue.toString(16).padStart(2, 0)}`;
  }

  return "Invalid color";
}

console.log(generateHex("green"));

// improverd Logic

function generateHex(color) {
  const validColors = ["red", "green", "blue"];
  color = color.toLowerCase();

  if (!validColors.includes(color)) {
    return "Invalid color";
  }

  let red = color === "red" ? 255 : Math.floor(Math.random() * 256);
  let green = color === "green" ? 255 : Math.floor(Math.random() * 256);
  let blue = color === "blue" ? 255 : Math.floor(Math.random() * 256);

  // Convert to two-digit hex values
  const toHex = (val) => val.toString(16).padStart(2, "0");

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

console.log(generateHex("green"));

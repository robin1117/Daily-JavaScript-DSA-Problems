/*
-------------------------------------------------
📝 Problem: Vowel Balance
-------------------------------------------------
 Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function isBalanced(s) {
  if (s.length == 0) {
    return "string Empty";
  }
  let length = s.length;
  let star;
  let end;
  let vowels = ["a", "e", "i", "o", "u"];
  let leftWeight = 0;
  let righWeight = 0;

  if (length % 2 != 0) {
    star = s.slice(0, parseInt(length / 2));
    end = s.slice(parseInt(length / 2) + 1);

    vowels.forEach((ele) => {
      star.toLowerCase().includes(ele.toLowerCase()) ? leftWeight++ : "";
    });
    vowels.forEach((ele) => {
      end.toLowerCase().includes(ele.toLowerCase()) ? righWeight++ : "";
    });
  } else {
    star = s.slice(0, length / 2);
    end = s.slice(length / 2);

    vowels.forEach((ele) => {
      star.toLowerCase().includes(ele.toLowerCase()) ? leftWeight++ : "";
    });
    vowels.forEach((ele) => {
      end.toLowerCase().includes(ele.toLowerCase()) ? righWeight++ : "";
    });
  }
  return leftWeight == righWeight;
}

console.log(isBalanced("robin")); //true
console.log(isBalanced("SPANA")); //fasle
console.log(isBalanced("Balbir")); //true

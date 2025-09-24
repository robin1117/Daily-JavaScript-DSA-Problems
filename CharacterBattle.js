/*
-------------------------------------------------
📝 Problem:Character Battle
-------------------------------------------------
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function getStrength(ch) {
  if (ch >= 'a' && ch <= 'z') {
    return ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1; // 1–26
  } else if (ch >= 'A' && ch <= 'Z') {
    return ch.charCodeAt(0) - 'A'.charCodeAt(0) + 27; // 27–52
  } else if (ch >= '0' && ch <= '9') {
    return parseInt(ch, 10); // digit face value
  } else {
    return 0; // all other chars
  }
}

function battle(myArmy, opposingArmy) {

  if (myArmy.length < opposingArmy.length) {
    return "We retreated";
  }
  if (!(myArmy.length == opposingArmy.length)) {
    return 'Opponent retreated'
  }
  let myWins = 0;
  let oppWins = 0;

  for (let i = 0; i < myArmy.length; i++) {
    let myStrength = getStrength(myArmy[i]);
    let oppStrength = getStrength(opposingArmy[i]);

    if (myStrength > oppStrength) {
      myWins++;
    } else if (oppStrength > myStrength) {
      oppWins++;
    }
  }
  if (myWins > oppWins) return "We won";
  if (oppWins > myWins) return "We lost";

  return "It was a tie";

}





console.log(battle("PC", "Mac"))
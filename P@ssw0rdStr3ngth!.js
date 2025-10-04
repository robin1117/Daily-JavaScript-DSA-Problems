/*
-------------------------------------------------
📝 Problem:P@ssw0rd Str3ngth!
-------------------------------------------------
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function checkStrength(password) {
  const validationConfig = [
    (string) => string.length >= 8,
    (string) => /(?=.*[a-z])(?=.*[A-Z])/.test(string),
    (string) => /[0-9]/.test(string),
    (string) => /[!@#$%^&*]/.test(string)
  ];

  // Count how many rules are satisfied
  const passedRules = validationConfig.map(fn => fn(password)).filter(Boolean).length;

  if (passedRules < 2) return 'weak';
  if (passedRules < 4) return 'medium';
  return 'strong';
}

console.log(checkStrength("S3cur3P@ssw0rd")); // "strong"
console.log(checkStrength("PASSWORD!"));      // "medium"
console.log(checkStrength(""));         // "weak"

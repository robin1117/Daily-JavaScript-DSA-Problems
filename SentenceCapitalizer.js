/*
-------------------------------------------------
📝 Problem:Sentence Capitalizer
-------------------------------------------------
For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
Characters 0-9 correspond to luminosity levels 0-9.
Characters A-Z correspond to luminosity levels 10-35.
A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function capitalize(paragraph) {
  let isSenEnd = true
  let modifiedPara = ""

  paragraph.split('').forEach((char) => {
    if (isSenEnd && !(char == " ")) {
      modifiedPara += char.toUpperCase()
      isSenEnd = false
    }
    else {
      modifiedPara += char
    }

    if (char == '.' || char == '?' || char == '!') {
      isSenEnd = true
    }


  })
  return modifiedPara

}

capitalize("crazy!!!strange???unconventional...sentences.")
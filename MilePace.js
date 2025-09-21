/*
-------------------------------------------------
📝 Problem: Mile Pace
-------------------------------------------------
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/


function milePace(miles, duration) {
  let [min, sec] = duration.split(":")
  let totalMinutes = parseInt(min.padEnd(2, 0)) + sec / 60
  let timeForEach = [parseInt(totalMinutes / miles).toString().padStart(2, 0),
  parseInt((totalMinutes / miles - parseInt(totalMinutes / miles)) * 60).toString().padStart(2, 0)]
  return timeForEach.join(":")
}
milePace(3, "24:00") //08:00
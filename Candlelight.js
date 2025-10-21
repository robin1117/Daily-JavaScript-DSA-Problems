/*
-------------------------------------------------
📝 Problem: Candlelight
-------------------------------------------------
Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, return the number of candles you will have used after creating and burning as many as you can.

For example, if given 7 candles and it takes 2 burned candles to make a new one:

Burn 7 candles to get 7 leftovers,
Recycle 6 leftovers into 3 new candles (1 leftover remains),
Burn 3 candles to get 3 more leftovers (4 total),
Recycle 4 leftovers into 2 new candles,
Burn 2 candles to get 2 leftovers,
Recycle 2 leftovers into 1 new candle,
Burn 1 candle.
You will have burned 13 total candles in the example.
-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function burnCandles(candles, leftoversNeeded) {
  let burned = 0;
  let leftovers = 0;

  while (candles > 0) {
    burned += candles;              // burn all current candles
    leftovers += candles;            // add their leftovers
    candles = Math.floor(leftovers / leftoversNeeded); // create new candles
    leftovers = leftovers % leftoversNeeded;            // remaining leftovers
  }

  return burned;
}

console.log(burnCandles(7, 2));     // 13
console.log(burnCandles(10, 5));    // 12
console.log(burnCandles(20, 3));    // 29
console.log(burnCandles(17, 4));    // 22
console.log(burnCandles(2345, 3));  // 3517

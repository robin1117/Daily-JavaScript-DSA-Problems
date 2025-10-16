/*
-------------------------------------------------
📝 Problem:Fill The Tank
-------------------------------------------------
Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

tankSize is the total capacity of the tank in gallons.
fuelLevel is the current amount of fuel in the tank in gallons.
pricePerGallon is the cost of one gallon of fuel.
The returned value should be rounded to two decimal places in the format: "$d.dd".

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/

function costToFill(tankSize, fuelLevel, pricePerGallon) {

  let amountToBeFilled = tankSize - fuelLevel

  return ('$' + (amountToBeFilled * pricePerGallon).toFixed(2))

  return tankSize;
}

console.log(costToFill(15, 10, 3.50))
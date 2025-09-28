/*
-------------------------------------------------
📝 Problem:Second Best
-------------------------------------------------
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

-------------------------------------------------
✅ Source: FreeCodeCamp DSA
-------------------------------------------------
*/
function getLaptopCost(laptops, budget) {

    let maxEle = Math.max(...laptops)
    let secondMostExpensive = laptops.filter((ele) => {
        if (ele < maxEle & ele <= budget) {

            return ele
        }
    })
    if (secondMostExpensive.length == 0) {
        return 0
    }
    return Math.max(...secondMostExpensive);
}
getLaptopCost([2099, 1599, 1899, 1499], 1000)
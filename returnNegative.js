// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//need to make a number (-). If its already negative, it stays negative, if num = 0; stays 0.
//My Solution
function makeNegative(num) {
   return -Math.abs(num) //the - here makes sure to always return a negative number. Then I decided to use the Math.abs() method to complete the problem
}

//makeNegative(15) => -15
//makeNegative(-15) => -15
//makeNegative(0) => 0

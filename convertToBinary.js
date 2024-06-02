// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

//need to convert non-neg number, result should return number in binary format
//My Solution
function toBinary(n){
  return +n.toString(2);
  // + above is the unary plus operator, converts result to a number
  // .toString() method will turn our number into string with a radix (2) ===base number value(needed for binary since we only use 1s and 0s)
}

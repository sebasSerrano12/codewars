//Complete the function which converts hex number (given as a string) to a decimal number.
//My Solution
function hexToDec(hexString){
  //parseInt parses a string and returns an integer. It also accepts a second argument for the radix[16] in this case!!! ( BASE OF A NUMBER b/w 2 - 36)
  return parseInt(hexString, 16)
}

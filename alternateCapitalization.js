// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
// Good luck!

function capitalize(s) {
  let evenIndexCaps = ''; //first declared a variable for the odd capitalization values to go into
  let oddIndexCaps = ''; //here, the odd capitalized indexes will go here

  for (let i = 0; i < s.length; i++) { //this for loop will check for every character in the string
    if (i % 2 === 0) { 
      evenIndexCaps += s[i].toUpperCase(); //in this conditional, if the modulus of the indexes === 0 we will capitalize only the even-number indexes
      oddIndexCaps += s[i];
    } else {
      evenIndexCaps += s[i];
      oddIndexCaps += s[i].toUpperCase();// in the else statement, will capitalize the oddly indexed characters 
    }
  }
  return [evenIndexCaps, oddIndexCaps]; //finally we will return the string in the two versions manipulated above
}

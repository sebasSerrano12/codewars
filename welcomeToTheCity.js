// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//My solution
//name = array, 1 or more vals, NEEDS to be JOINED together with 1 space
//city & state will be strings

let name = [] //first declared name = empty array ([])
function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!` 
  //with a template literal, I was able to concatenate all the parameters for this problem much more efficiently 
  //the only tricky part was to space the name, but with the join(' ') method we made sure this issue was resolved
}
// this is the test code that should run this function sayHello(['Sebastian', 'Serrano'], 'Bogota', 'Colombia') //==> `Hello, Sebastian Serrano! Welcome to Bogota, Colombia!`

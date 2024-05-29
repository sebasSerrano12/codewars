// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
 //My solution in ternary operator
  return name === owner ? 'Hello boss'//this line of code check if name === owner; returning string
  : 'Hello guest' //this is the else statement in ternary operator; returning repective value;
}

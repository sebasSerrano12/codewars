// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level.
  
//My Solution
function getRealFloor(n) {
//SOLUTION IN IF ELSE
//   if (n === 1 || n === 0){
//     return 0
//   } else if (n > 1 && n < 13){
//     return n - 1
//   } else if (n > 13){
//     return n -2
//   } else {
//     return n
//   }
//SOLUTION IN TERNARY OPERATOR
  return (n === 1 || n === 0) ?  0 : (n > 1 && n < 13) ? n - 1 : (n > 13) ? n - 2 : n
}

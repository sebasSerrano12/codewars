// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(arr) {
  // your code here
  if (arr.length === 0){
    return 0;
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += arr[i]
  }
  
  return total/arr.length;
  
}

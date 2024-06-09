// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
  const mulThem = x.reduce((a, c) => a * c,1);
  return mulThem
}

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

//My solution
function findShort(s){
  let short = s.split(' ');
  let shortWord = short.sort((a, b) => a.length - b.length); //this sorts the words by word length (smallest ---> largest)
  
  return  shortWord[0].length; //once we sort the strings, we will return the first string with the shortest length
}
// function findShort(s) {
//   if (!s.trim()) {
//     return "Input string is empty";
//   }

//   let words = s.trim().split(/\s+/);
//   let shortWord = words.sort((a, b) => a.length - b.length);

//   return shortWord[0];
//}

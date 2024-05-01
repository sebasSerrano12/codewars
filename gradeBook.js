//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  // Code here
  let averValue = (s1 + s2 + s3) / 3;
  if (averValue >= 90){
    return 'A'
  } else if (averValue >= 80){
    return 'B'
  } else if (averValue >= 70){
    return 'C'
  } else if (averValue >= 60){
    return 'D'
  } else {
    return "F"
  }

function getGrade(s1, s2, s3) {
  let sum = (s1 + s2 + s3) / 3;     //get the sum st to var
  if (sum >= 90) {      //check for each condition
    return "A";
  } else if (sum >= 80 && sum < 90) {
    return "B";
  } else if (sum >= 70 && sum < 80) {
    return "C";
  } else if (sum >= 60 && sum < 70) {
    return "D";
  } else {
    return "F";
  }
}


function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }
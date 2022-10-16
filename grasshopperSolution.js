function getGrade (s1, s2, s3) {
    let sum = (s1 + s2 + s3) / 3
    if(sum >= 90){
      return "A"
    } else if(sum >= 80 && sum < 90){
      return "B"
    } else if(sum >= 70 && sum < 80){
      return "C"
    } else if (sum >= 60 && sum < 70){
      return "D"
    } else{
      return "F"
    }
  }
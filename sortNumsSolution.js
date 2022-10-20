function solution(nums){
    if(!nums){      //if nums is null return empty array
      return []
    }
    return nums.sort(function(a, b){return a-b});       //sort nums
  }
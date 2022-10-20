function solution(nums){
    if(!nums){
      return []
    }
    return nums.sort(function(a, b){return a-b});
  }
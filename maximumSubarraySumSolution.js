var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;  //make min var, answer var, i var and sum var

    for (i = 0; i < arr.length; i++) {      //loop thru the array
      sum += arr[i];    //let sum equal plus each number
      min = Math.min(sum, min);     //min becomes the minium between sum and min
      ans = Math.max(ans, sum - min);   //answer is the largest number between answer and sum - min
    }
    return ans;
  }

  /* [-2, 1, -3, 4, -1, 2, 1, -5, 4] */
  /* [4, -1, 2, 1] = 6 */

  //https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
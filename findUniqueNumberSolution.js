function findUniq(arr) {
  arr.sort((a, b) => a - b);        //sort the array
  return arr[0] == arr[1] ? arr.pop() : arr[0];     //use ternery to determine what to return
                                            //if arr[0] equals arr[1] return arr.pop() (the last in the array)
                                            //if not return arr[0]
}

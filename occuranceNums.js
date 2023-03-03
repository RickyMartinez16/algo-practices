let input = [1,2,3,4,2,3,2,4,2,1,2,3,4,5,6,4,6,5,3,5,7,8,5,4,3,2,3,4,5,6,7,5,4,3,4,5,6,7,8,9,8,6,5,6,7,8,3,5,6,7,8,0,1]

function occuranceNums(array){

    //create a map
    let map = {}

    //loop thru input array
    for(let i = 0; i < array.length; i++){
        //if key exists in the map
        if(map[array[i]]){
            //add one to its value
            map[array[i]]++
        } else {
            //if it doesnt exist already then make it start at 1
            map[array[i]] = 1
        }
    }
    return map
}

console.log(occuranceNums(input))



//wokring but very slow---------------------------------------------------------

var singleNumber = function(nums) {
    //sort the input array low to big
    let sortedNums = nums.sort((a, b) => a - b)

    //loop thru sorted array increment by 2
    for(let i = 0; i < sortedNums.length; i += 2){
        //make a j var to compare
        let j = i + 1
        
        console.log(sortedNums)
        //if the i and j are the same keep moving
        if( sortedNums[i] == sortedNums[j]){
            continue
            //else if theyre not the same 
        } else if(sortedNums[i] != sortedNums[j]) {
            //return the i
            return sortedNums[i]
            //else if the last one is the same as j youve run out of js
        } else if (sortedNums[sortedNums.length - 1] === sortedNums[j]){
            return sortedNums[j]
        }
    }
};


//better--------------

function singleNumber(nums){
    if(nums.length === 1) return nums[0];
    
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            return nums[i]
        }
    }
    return null;
 };
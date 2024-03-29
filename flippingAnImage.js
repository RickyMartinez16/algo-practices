// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].
 

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:

// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]



var flipAndInvertImage = function(image) {
    //loop thru the image array of arrays.
    for(let i = 0; i < image.length; i++){
        //loop thru each individual array in the big array
        for(let j = 0; j < image[i].length; j++){
            //flip each 1 and 0
            if(image[i][j] === 1){
            image[i][j] = 0
        } else if(image[i][j] === 0){
            image[i][j] = 1
            }
        }
    }
    //once the 1s and 0s are all inverted go thru and reverse the order of each array
    for(let k = 0; k < image.length; k++){
        image[k] = image[k].reverse()
    }
    //return final image
    return image
};
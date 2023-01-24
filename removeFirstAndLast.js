
// Output
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL



//WORKING-----------------------------------------

function array(arr){
    //if the input is null or 1 or 2 or 3 return null
    if(!arr || arr.length == 1 || arr.length == 2 || arr.length == 3) return null

    //split the input by the commas
    let arrsplit = arr.split(",")

    //make it a string without first and last char
    let finalString = String(arrsplit.slice(1, -1))

    //if its emopty return null
    if (!finalString) return null

    //reutn the final string replacing the commas with spaces
    return finalString.replace(/,/g, " ");
  }

//best
  function array(arr){

    //split the array by commas, slice first and last, join them with a space or null
    return arr.split(",").slice(1,-1).join(" ") || null;
  }
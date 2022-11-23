//------not working-----//

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
    return birds.filter((e) => e === geese)
  };


//------working------//

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];  //given geese array
    return birds.filter(b => !geese.includes(b));   //return a filtered array that includes birds if geese array does not include b
  };
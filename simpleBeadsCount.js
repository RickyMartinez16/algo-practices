// Two red beads are placed between every two blue beads. 
//There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(n) (in PHP count_red_beads($n); 
//in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
    //if n is 0 or 1 return 0
    if(n <=1) return 0
    
    //return result of n times 2 then minus 2
    return (n * 2) - 2
  }
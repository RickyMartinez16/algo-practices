function calculateYears(principal, interest, tax, desired) {
    if(principal >= desired) return 0       //if the princial is greater than desired return 0
    let years = 0;      //make a years counter
    while(principal < desired){     //while princial is less than desired run this:
      let i = principal * interest;     //calculate the inetest
      principal+= i;    //add the interest to the principal
      let taxed = i * tax;      //calcuale the tax
      principal -= taxed;       //remove tacx from the principal
      years += 1;       //add 1 year to the counter
    }  
  return years      //return final years counter
}


//best//

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);      //math wiz
      years++;
    }
    return years;
}
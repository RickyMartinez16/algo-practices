function calculateYears(principal, interest, tax, desired) {
    if(principal >= desired) return 0 
    let years = 0;
    while(principal < desired){
      let i = principal * interest;
      principal+= i;
      let taxed = i * tax;
      principal -= taxed;
      years += 1;
    }  
  return years
}
function pageCount(n, p) {
    // Write your code here
    // is page closer to front or back?
    // find number turns from front and back, return min of 2 values
    // page p is Math.floor(p/2) page turns from front
    // and Math.floor((n-p) / 2) page turns from the end
    
    // test case 26: only test case with even number pages
    // with even pages, p is Math.ceil((n-p) / 2) turns from end
    
    if (n % 2 == 0) return Math.min(Math.floor(p/2), Math.ceil((n-p)/2));    
    
    return Math.min(Math.floor(p/2), Math.floor((n-p)/2));
}

function pageCount(n, p) {
    let start = Math.floor(p / 2); //var start that divides p by 2 and floors the number (i.e: 4.5 = 4, 7.8 = 7)
    //let end equal: if the remainder of n / 2 === 0 then var end is math ciel (round up) of n - p then / by 2. 
    //OR
    // if remainder of n / 2 is NOT 0 then end var is round down of n - p then / by 2
    let end = n % 2 === 0 ? Math.ceil((n - p) / 2) : Math.floor((n - p) / 2) 
    
    //return if start is less than end return start var
    //OR
    //if start is greater than end return end var
    return start < end ?  start : end;
}


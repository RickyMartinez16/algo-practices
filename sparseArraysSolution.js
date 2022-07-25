function matchingStrings(strings, queries) {
    let results = [];  // set results var to an empty array
    
    queries.forEach((query) => {     //look inside the queries array. for each query in the queries array
        results.push(strings.filter((string) => string === query).length);  //push into the results array. we want to push a number in results
                                                                            //first filter the strings array. 
                                                                            //filter if the string matches the query string. 
                                                                            //and only push the amount (legnth) in the strings arr
    })
    
    return results;  //return result 
}




// or 

function matchingStrings(strings, queries) {
    let result = [];

    result = queries.map(query => {
       return strings.filter((string) => string === query).length;  //same filter process as above but push it into the map
    });
    return result;
}
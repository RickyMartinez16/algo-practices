function lonelyinteger(a) {
    let sum1 = 0;  //set var of sum1 0
    let sum2 = 0;  //set var of sum2 to 0
    a.forEach(int => {    //for each int in the input array sum them to sum1
        sum1 += int
    })
    let uniq = new Set(a);    //make a new unique set that only cotains unique ints from the input array
    uniq.forEach(x => {     //for each X in the unique array add them to sum2
        sum2 += x
    })
    return 2 * sum2 - sum1;     // return 2 times sum2 - sum1
}

//input: a = [1, 2, 3, 2, 1]
//output = 3

//input: a = [1, 1, 2]
//output = 2

//input: a = [0, 0, 1, 2, 1]
//output = 2
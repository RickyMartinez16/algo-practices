// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. 
//You should do this without converting the inputted number into a string.

// // Please do not use
// const forbidden = "
//                   '
//                   `
//                   string
//                   fixed
//                   precision
//                   .keys


function reverse(n){
    //keep count of the rverse count
    let rev = 0;

    //while n exists
    while (n) {
        //assign rev to rev times 10 plus n reaminder 10
        rev = rev * 10 + n % 10;
        //change n 
        n = Math.floor(n/10);
    }
    return rev;
}
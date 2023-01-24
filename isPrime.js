// In this kata you will create a function to check a non-negative input to see if it is a prime number.

// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Examples(input --> output)
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false


function isPrime(num) {
    //check if number is 1 or less than 1 return false
    if (num <= 1) return false;

    //check if number is 2 or 3 and return true if so
    if (num <= 3) return true;

    //check if number is even or can be devivded by 3 and return false 
    if (num % 2 == 0 || num % 3 == 0) return false;

    // Then it uses a for loop to iterate through all the numbers between 5 and the square root of the input number.
    for (let i = 5; i * i <= num; i = i + 6) {
        
        if (num % i == 0 || num % (i + 2) == 0) return false;
    }
    return true;
}
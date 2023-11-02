var isPowerOf5 = function(n){
    if(n <= 0) return false

    while(5 % n === 0){
        n /= 5
    }

    return n === 1
}
function countBy(x, n) {
    var z = []; //make an array var
    for (i = 1; i <= n; i++) {  //make a loop that starts at 1, runs the as long as its less than or equals to n, incrment by 1
        z.push(x * i);  //push x times i
    }
    return z;
}
function lonelyinteger(a) {
    // Write your code here
    let sum =0;
    let sumx = 0;
    a.forEach(item => {
        sum += item
    })
    let uniq = new Set(a);
    uniq.forEach(x => {
        sumx += x
    })
    return 2*sumx - sum;
}
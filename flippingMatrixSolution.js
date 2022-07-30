let matrix = [
    [112, 42, 83, 119,],
    [56, 125, 56, 49,],
    [15, 78, 101, 43,],
    [62, 98, 114, 108]
]

console.log(matrix)

function flippingMatrix(matrix) {
    let m = matrix
    let l = matrix.length - 1
    let sm = Math.floor(matrix.length/2)
    let total = 0;
    for (let i = 0; i < sm; i++) {
        for (let j = 0; j < sm; j++) {
            total += Math.max(m[i][j], m[l-i][j], m[i][l-j], m[l-i][l-j])
        }
    }
    return total
}

// 1
// 2
// 112 42 83 119
// 56 125 56 49
// 15 78 101 43
// 62 98 114 108

//output: 414

// https://www.youtube.com/watch?v=1jGAutnHuYM&ab_channel=CoderDmitri

//https://www.youtube.com/watch?v=YWbBFOsN7I0&ab_channel=praveen    
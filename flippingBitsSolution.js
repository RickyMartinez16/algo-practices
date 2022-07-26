function flippingBits(n) {
    return ~n >>> 0;       // this operator " ~ " flips the bits. the " >>> " makes sure it UInt32 length
}

//input: 
// 2147483647
// 1
// 0

//output: 
// 2147483648
// 4294967294
// 4294967295
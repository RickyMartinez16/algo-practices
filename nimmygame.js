// You are playing the following Nim Game with your friend:

// Initially, there is a heap of stones on the table.
// You and your friend will alternate taking turns, and you go first.
// On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
// The one who removes the last stone is the winner.
// Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

 

// Example 1:

// Input: n = 4
// Output: false
// Explanation: These are the possible outcomes:
// 1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
// 2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
// 3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
// In all outcomes, your friend wins.
// Example 2:

// Input: n = 1
// Output: true
// Example 3:

// Input: n = 2
// Output: true
 

// Constraints:

// 1 <= n <= 231 - 1


var canWinNim = function(n) {
    //if n is a multiple of 4 you will lose
    //% is the remainder of.
    return n % 4 !== 0
};

// If n is 1, 2, or 3, you can remove all the stones on your turn and win because there are no stones left for your opponent.

// If n is 4, you will lose the game. No matter how many stones you remove (1 to 3), your opponent can always respond in a way that guarantees they win.

// If n is 5, 6, or 7, you can make a move that leaves your opponent with 4 stones. This means your opponent will lose, as explained in the previous point.

// If n is 8, you will lose. Your opponent can mimic your moves and ensure you are left with 4 stones, leading to their victory.


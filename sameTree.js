// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false


//recursive function

var isSameTree = function(p, q) {
    //is the trees are empty return truue
    if(!p && !q)return true
    //if either of p or q is null or either value being looked at is that the same as ps or qs return false
    if(!p || !q || p.val !== q.val) return false

    //recursive function call
    //check if the left subtree of p tree and q tree are the same and if right sub tree or p and q are the same
    //will return true if so
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]




function postorderTraversal(root) {
    if(!root) {
        return [];
    }

    const result = [];
    const nodeToTraverse = [root];

    while(nodeToTraverse.length) {
        const currentNode = nodeToTraverse.pop();
        result.unshift(currentNode.val);

        if(currentNode.left) {
            nodeToTraverse.push(currentNode.left);
        }

        if(currentNode.right) {
            nodeToTraverse.push(currentNode.right);
        }
    }

    return result;
}
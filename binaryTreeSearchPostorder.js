// Given the root of a binary tree, return the postorder traversal of its nodes' values.

 
// Example 1:


// Input: root = [1,null,2,3]
// Output: [3,2,1]


function postorderTraversal(root) {
    //if there is no root in the tree return empty array
    if(!root) {
        return [];
    }

    //make final result array
    const result = [];
    //find the node to traverse and start it at the root
    const nodeToTraverse = [root];


    //while the node to traverse length is above 0
    while(nodeToTraverse.length) {
        //keep track of the current Node. initize it to be the last value in the array
        const currentNode = nodeToTraverse.pop();
        //push the currentNode value to the front of the result array
        result.unshift(currentNode.val);

        //if the current node . left exists
        if(currentNode.left) {
            //add it to the node to traverse array
            nodeToTraverse.push(currentNode.left);
        }

        //if the current node . right exsits
        if(currentNode.right) {
            //add is to the node to traverser array
            nodeToTraverse.push(currentNode.right);
        }
    }

    //return final
    return result;
}
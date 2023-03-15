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
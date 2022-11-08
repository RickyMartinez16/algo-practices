
 const MAX_CHAR = 26;
  
 class Tree {
  
     // index is set when node is a leaf
     // node, otherwise -1;
     /*to make new trie*/
     constructor()
     {
         this.child = new Array(MAX_CHAR).fill(null);
         this.index = -1;
     }
 }
  
 /* function to insert in trie */
 function insert(root,str,index)
 {
     let node = root;
  
     for (let i = 0; i < str.length; i++) {
  
         /* taking ascii value to find index of
         child node */
         let ind = str.charCodeAt(i) - 'a'.charCodeAt(0);
  
         /* making new path if not already */
         if (node.child[ind] == null)
             node.child[ind] = new Tree();
  
         // go to next node
         node = node.child[ind];
     }
  
     // Mark leaf (end of word) and store
     // index of word in arr[]
     node.index = index;
 }
  
 /* function for preorder traversal */
 function preorder(node, arr)
 {
     if (node == null)
         return false;
  
     for (let i = 0; i < MAX_CHAR; i++) {
         if (node.child[i] != null) {
  
             /* if leaf node then print key*/
             if (node.child[i].index != -1)
                 console.log(arr[node.child[i].index],"</br>");
  
             preorder(node.child[i], arr);
         }
     }
 }
  
 function printSorted(arr,n)
 {
     let root = new Tree();
  
     // insert all keys of dictionary into trie
     for (let i = 0; i < n; i++)
         insert(root, arr[i], i);
  
     // print keys in lexicographic order
     preorder(root, arr);
 }

  
let arr = [ "hello", "darkness", "my", "old", "friend", "ive", "come"];
let n = arr.length;
printSorted(arr, n);
let indexOf = arr.indexOf("darkness")
console.log(indexOf)
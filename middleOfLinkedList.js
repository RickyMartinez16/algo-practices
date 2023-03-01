// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
     //make a fast var that will count two steps
    let fast = head
    //slow will count just one
    let slow = head

    //while the head and the next is not null
    while(fast != null && fast.next != null){
        //add two for the fast list when its at the end the slow list will be in the middle
        fast = fast.next.next
        //add just one to the slow list
        slow = slow.next
    }

    return slow
};
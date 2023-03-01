// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


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
 var reverseList = function(head) {
     //make 3 lists. prev, current and next
    var prev = null;
    var current = head;
    var next = null;

    //while current is not null
        while (current != null) {
            //next is currents next
            next = current.next;
            //current next becomes prev (null to start)
            current.next = prev;
            //prev is what current was
            prev = current;
            //currnent is now next
            current = next;
        }
        //head is prev final
        head = prev;
        return head;
};
// Given the head of a sorted linked list, delete all duplicates such that each element 
//appears only once. Return the linked list sorted as well.

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
 var deleteDuplicates = function(head) {
     //if the head or the head next is null 
    if(!head || !head.next){
        //return the head
        return head
    }

    //make a var for the current
    let current = head

    //while the current is not null and the current next is not full
    while(current != null && current.next != null){
        //check if the current value equals the next value
        if(current.val === current.next.val){
            //if yes then the current next becomes the current next next. then check again
            current.next = current.next.next
        } else {
            //if it isntthe same then the current pointer becomes the next because its already sorted
            current = current.next
        }
    }
    return head
};
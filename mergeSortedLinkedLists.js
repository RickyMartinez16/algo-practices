// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.






/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


 var mergeTwoLists = function(list1, list2) {
     //make a new empty linked list
    let list3 = new ListNode(null, null)
    let prev = list3

    //while list1 and list2 are not empty 
    while(list1 !== null && list2 !== null){

        //check if the list1 value is less than or equal to the list 2 value. if yes
        if(list1.val <= list2.val){
            //make the prev next pointer to list1 to start the new merged list
            prev.next = list1;
            //list1 is pointer is now list1.next
            list1 = list1.next
        } else {
            //else if list2 value is greater 
            //make the pointer of new list pointing to list2
            prev.next = list2;
            //change the list2 pointer to lis2t.next
            list2 = list2.next
        }
        //move the pointer to next
        prev = prev.next;
    }
    
    //if list 1 is empty just add the remaining list2 by changing prev.next pointer to list 2. we know already sorted
    if(list1 === null) {prev.next = list2}
    //if list 2 is empty just add the remaining list1 by changing prev.next pointer to list 1. we know already sorted
    if(list2 === null) {prev.next = list1}

    //return final list3
    return list3.next
};


// create new linked list pointer
// while both linked lists are not empty
  // once we reach end of a linked list, append the other 
  // list because we know it is already sorted
  //return final
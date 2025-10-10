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
    let current = head;
    let prev = null;

    while (current) {
        let nextNode = current.next; // temporarily store the next node
        current.next = prev;         // reverse the link
        prev = current;              // move prev forward
        current = nextNode;          // move current forward
    }

    return prev; // prev becomes the new head
    
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visited = new Set();
    let current = head;

    while(current){
            if (visited.has(current)){ // how tf did I forget to add brackets
                return true
            } else {
                visited.add(current) 
            }
            current = current.next
    }
    return false;
};
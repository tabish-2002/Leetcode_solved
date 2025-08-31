/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let val = [];
    let current = head;

    // Step 1: collect values in array
    while (current) {
        val.push(current.val);
        current = current.next;
    }

    // Step 2: two pointers
    let left = 0;
    let right = val.length - 1;

    while (left < right) {
        if (val[left] !== val[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
    

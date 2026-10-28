/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;

    while (fast&& fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let current = slow;
    while(current){
        let nextNode = current.next;
        current.next = prev;
        prev= current;
        current = nextNode;
    }
    let max = 0;
    let first = head;
    let second = prev;
    while(second){
        max = Math.max(max, first.val + second.val);
        first = first.next;
        second = second.next;
    }
    return max;
};
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
var getDecimalValue = function(head) {
    let numStr = ''
    
    let current = head;
    while(current){
        numStr += current.val
        current = current.next
    }
    return parseInt(numStr, 2)
};

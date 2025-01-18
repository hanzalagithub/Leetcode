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
    // Create a dummy node to simplify some corner cases
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next && current.next.next) {
        if (current.next.val === current.next.next.val) {
            // Remove duplicates
            let val = current.next.val;
            while (current.next && current.next.val === val) {
                current.next = current.next.next;
            }
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};

// Create a sample linked list: 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(5);

// Call the deleteDuplicates function
let result = deleteDuplicates(head);

// Print the result
while (result) {
    console.log(result.val);
    result = result.next;
}
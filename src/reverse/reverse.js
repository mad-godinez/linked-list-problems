const LinkedList = require("../lib/linkedList");

/***** ALGORITHM PSEUDO *****
  function reverse(list){
    create a node that holds the list's head
    create a new empty linked list to hold reversed nodes
    while node -> next is not null {
      insert node value at reversed list's head
      current node is now = to current node -> next
    }
    return the reversed list
  }
*/
/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
 function reverseIterative(list) {
  const reversedList = new LinkedList();
  let node = list.head;
  while (node) {
    reversedList.insertAtHead(node.value);
    node = node.next;
  }
  return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
  if (list.length <= 1) return list;

  const head = list.head.value;
  list.remove((node, index) => index === 0);

  let reversed = reverseRecursive(list);
  return reversed.insert(head);
}

module.exports = { reverseIterative, reverseRecursive };
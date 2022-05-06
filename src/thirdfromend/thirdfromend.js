const LinkedList = require("../lib/linkedList");
/***** ALGORITHM PSEUDO *****
  function third(list){
    return null if empty list 
    create first pointer init'd : list head
    create iterator init'd : 0
    while iterator < 2 & first pointer -> next is not null{
      first pointer set : first pointer -> next
      increment iterator
    }
    return null if i < 2
    
    create second pointer init'd : list head
    while first pointer -> next is not null{
      first pointer set : first pointer -> next
      second pointer set : second pointer -> next
    }
    return second pointer
  }
/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
  if(!list.head) return null;
  let firstPtr = list.head;
  let iterator = 0;
  while(iterator < 2 && firstPtr.next != null) {
    firstPtr = firstPtr.next;
    iterator+=1;
  }
  if(iterator < 2) return null;
  let secondPtr = list.head;
  while(firstPtr.next != null) {
    firstPtr = firstPtr.next;
    secondPtr = secondPtr.next;
  }
  return secondPtr;
}

module.exports = thirdFromEnd;

function solution(list) {
  if (!list.head) {
    return null;
  }

  let pointer1 = list.head;
  let i = 0;
  while (i < 2 && pointer1.next) {
    pointer1 = pointer1.next;
    i++;
  }
  if (i < 2) {
    return null;
  }

  let pointer2 = list.head;
  while (pointer1.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer2;
}
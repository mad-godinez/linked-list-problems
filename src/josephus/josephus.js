const LinkedList = require("../lib/linkedList");

/***** ALGORITHM PSEUDO *****
function josephus(list, m){
	create node init'd to list head
	create tail init'd to last node in list
	set tail-> next pointer to list head
	
	while list has more than 1 nodes to count{
		for m times (set current node to current node -> next)
		if current node -> next points to list head {set the list head node to head->next node}
		set node.next  to  node.next.next
    set node to node.next
	}
	return only remaining node's value
}
*/
/**
 * Use a circular list to solve the Josephus Problem.
 * @param {LinkedList} list 
 * @param {integer} m 
 * 
 * @returns {String} Node.value, the name of the last person left alive.
 */
function josephus(list, m) {
  let node = list.head,
      tail = list.find(isMatch = (node,index) => index === list.length - 1); 

  tail.next = node;

  while(node.next != node){
    for(var count=1; count<m; count++) node = node.next;
    
    if(node.next === list.head) list.head = list.head.next; 

    node.next = node.next.next;
    node = node.next;
  }
  return node.value; 
}

module.exports = josephus;

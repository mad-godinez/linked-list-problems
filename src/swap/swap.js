/* edge considerations: 
	* x or y is the list head{
			verify prev_ptrs are not null before reassign
			if x is head <-> make y the head
		}
	* x or y is the list tail
	* x and y point to same node
	* empty list
*/
/***** ALGORITHM PSEUDO *****
function swap(list, x, y){
	return list if it is empty
	
	create x_next init'd to x -> next
	create x_prev init'd to (if x is list head) ? null : the node->next that points to x	   
	create y_prev init'd to (if y is list head) ? null : the node->next that points to y
	 
  x-> next set to y -> next
	y-> next set to x_next

	if x is not list head { x_prev -> next set to y }
	else { set list head to y }

	if y is not list head { y_prev -> next set to x }
	else { set list head to x }
		
	return the list
}
*/
/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  if(list.head){
    let x_next = x.next, 
        x_prev = list.findWithPrevious(isMatch = (node) => node ===x)[1], 
        y_prev = list.findWithPrevious(isMatch = (node) => node ===y)[1];

    x.next = y.next;
    y.next = x_next;

    if(x_prev) x_prev.next = y;
    else list.head = y;
    if(y_prev) y_prev.next = x;  
    else list.head = x; 
  }
  return list;
}
module.exports = swap;

function solution(list, x, y) {
  if (!list.head) {
    return list;
  }

  const x_next = x.next;
  const x_prev = list.findWithPrevious((node) => node === x)[1];
  const y_prev = list.findWithPrevious((node) => node === y)[1];

  x.next = y.next;
  y.next = x_next;
  if (x_prev) {
    x_prev.next = y;
  } else {
    list.head = y;
  }

  if (y_prev) {
    y_prev.next = x;
  } else {
    list.head = x;
  }

  return list;
}
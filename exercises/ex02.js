// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  let node = list.getHead();

  while (node !== null && node.next !== null) {
    if (node.data === value) {
      if (node.prev === null) {
        list.setHead(node.next)
      } else {
        node.prev.next = node.next;
      }
      
      node.next.prev = node.prev;
      list.setSize(list.size-1);
    }

    node = node.next;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
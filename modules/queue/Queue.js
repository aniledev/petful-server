// initialize a new node class
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data for empty queue
    this.first = null;
    this.last = null;
  }

  // Add new data/node to the queue.
  enqueue(item) {
    const node = new _Node(item);

    // if the the first node is empty
    if (this.first === null) {
      this.first = node;
    }

    // if there is an node in the queue, let the last one point to the new node
    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  // Remove some data from the queue.
  dequeue() {
    // if the first node is empty, the queue is empty
    if (this.first === null) {
      return;
    }

    // once the first node is removed, the next node becomes the first node
    const node = this.first;
    this.first = this.first.next;

    // the last node should be null since all nodes "move up one"
    if (node === this.last) {
      this.last = null;
    }

    // return only the first value because a queue is a FIFO data structure
    return node.value;
  }

  // Return the next item in the queue.
  showNext() {
    // if the queue is empty, there is no node to return
    if (!this.first) {
      return null;
    }

    // return the value from the first node in the queue
    return this.first.value;
  }

  // show all items in the queue
  showAll() {
    // declare a variable so the current node is the first node
    let currentNode = this.first;
    // loop through the nodes as long as the current node is not null
    while (currentNode !== null) {
      // set the current node to be equal to the next node to keep looping
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // Return all items in the queue.
  returnAll() {
    // declare an empty array
    let result = [];

    // declare current variable set to the first node
    let currentNode = this.first;

    // loop through nodes as long as the current node is not null
    while (currentNode !== null) {
      // push the value of the current node into the array & set the current node equal to the next node
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    // return the array of all node values
    return result;
  }
}

module.exports = { Queue };

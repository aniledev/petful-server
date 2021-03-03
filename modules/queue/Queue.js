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

  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
  }
}

module.exports = Queue;

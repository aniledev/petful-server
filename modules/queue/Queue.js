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

  enqueue(item) {
    // Add new data/node to the queue.
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

  dequeue() {
    // Remove some data from the queue.
  }

  show() {
    // Return the next item in the queue.
  }

  all() {
    // Return all items in the queue.
  }
}

module.exports = Queue

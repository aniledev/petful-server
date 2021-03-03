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

  enqueue(data) {
    // Add some data to the queue.
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

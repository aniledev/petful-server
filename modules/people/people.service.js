const Queue = require("../queue/Queue");
const store = require("../../store");
const { returnAll } = require("../queue/Queue");

// Set up initial data.
// --------------------

// create a new people queue using the data structure created
const People = new Queue();

store.people.forEach((person) => People.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
  },

  enqueue(person) {
    // Add a person to the queue.
  },

  dequeue() {
    // Remove a person from the queue.
  }
}

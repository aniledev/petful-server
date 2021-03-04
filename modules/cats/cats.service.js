const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
  },

  dequeue(type) {
    // Remove a pet from the queue.
  },
};

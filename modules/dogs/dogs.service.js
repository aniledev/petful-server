const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  dogs: new Queue(),
};

store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
  },

  dequeue(type) {
    // Remove a pet from the queue.
  },
};

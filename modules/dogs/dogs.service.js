const Queue = require("../queue/Queue");
const store = require("../../store");
const returnAll = require("../queue/Queue");

// Set up initial data.
// --------------------

// create a new dogs queue using the data structure created
let Dogs = new Queue();

// for each dog in the array in the store, add the dog to the queue data structure
store.dogs.forEach((dog) => pets.Dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
  },

  dequeue(type) {
    // Remove a pet from the queue.
  },
};

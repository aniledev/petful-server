const Queue = require("../queue/Queue");
const store = require("../../store");
const returnAll = require("../queue/Queue");

// Set up initial data.
// --------------------

// create a new dogs queue using the data structure created
let Dogs = new Queue();

// for each dog in the array in the store, add the dog to the queue data structure
store.dogs.forEach((dog) => Dogs.enqueue(dog));

// --------------------

module.exports = {
  getDogs() {
    // Return the dog array using the methods in the queue class.
    const getDogs = returnAll(Dogs);
    return getDogs;
  },

  dequeueDogs(type) {
    // remove a dog from the dog queue
    const adoptedDog = Dogs.dequeue();
    // add the adopted dog back to the end of the queue so that the queue is never empty
    Dogs.enqueue(adoptedDog);
    return returnAll(Dogs);
  },
};

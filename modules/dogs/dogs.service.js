const Queue = require("../../modules/queue/Queue.js");
const store = require("../../src/store");

// create a new dogs queue using the data structure created
let Dogs = new Queue.Queue();
store.dogs.forEach((dog) => Dogs.enqueue(dog));

module.exports = {
  getDogs() {
    // Return the dog array using the methods in the queue class.
    const getDogs = Queue.returnAll(Dogs);
    return getDogs;
  },

  dequeueDogs() {
    // remove a dog from the dog queue
    const adoptedDog = Dogs.dequeue();
    // add the adopted dog back to the end of the queue so that the queue is never empty
    Dogs.enqueue(adoptedDog);
    return Queue.returnAll(Dogs);
  },
};

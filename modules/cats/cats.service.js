const Queue = require("../../modules/queue/Queue.js");
const store = require("../../src/store");

// create a new cats queue using the data structure created
let Cats = new Queue.Queue();
store.cats.forEach((cat) => Cats.enqueue(cat));

module.exports = {
  getCats() {
    // Returns the cat array using the methods in the queue class
    const getCats = Queue.returnAll(Cats);
    return getCats;
  },

  dequeueCats() {
    // Remove a cat from the cat queue
    const adoptedCat = Cats.dequeue();

    // add the adopted cat back to the end of the queue so the queue is never empty
    Cats.enqueue(adoptedCat);
    return Queue.returnAll(Cats);
  },
};

const Queue = require("../../modules/queue/Queue.js");
const store = require("../../store");
const returnAll = require("../queue/Queue.js");

// Set up initial data.
// --------------------

// create a new cats queue using the data structure created
let Cats = new Queue.Queue();

// for each cat in the array in the store, add the cat to the queue data structure
store.cats.forEach((cat) => Cats.enqueue(cat));

// --------------------

module.exports = {
  getCats() {
    // Returns the cat array using the methods in the queue class
    const getCats = Queue.returnAll(Cats);
    return getCats;
  },

  // is a function to show the next cat in line necessary?

  dequeueCats() {
    // Remove a cat from the cat queue
    const adoptedCat = Cats.dequeue();
    // is a adopted property for the cat that is adopted neceesary for other features?

    // add the adopted cat back to the end of the queue so the queue is never empty
    Cats.enqueue(adoptedCat);
    return Queue.returnAll(Cats);
  },
};

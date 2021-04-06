const Queue = require("../../modules/queue/Queue.js");
const store = require("../../src/store");
const returnAll = require("../queue/Queue");

// Set up initial data.
// --------------------

// create a new people queue using the data structure created
let People = new Queue.Queue();

store.people.forEach((person) => People.enqueue(person));

// --------------------

module.exports = {
  getPeople() {
    // Return all people in the queue using the methods in the queue class
    const getPeople = Queue.returnAll(People);
    return getPeople;
  },

  // is a function to show the next person in line necessary?
  inQueue() {
    return People.showNext();
  },

  enqueuePerson(newName) {
    // add a person to the store data and the queue
    store.people.push(newName);

    // Add a person to the queue.
    People.enqueue(newName);
    return Queue.returnAll(People);
  },

  dequeuePerson() {
    // Remove a person from the queue.
    const adopter = People.dequeue();

    // add person back to the queue so that the demo runs continuously
    People.enqueue(adopter);
    return Queue.returnAll(People);
  },
};

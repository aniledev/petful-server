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
  getPeople() {
    // Return all people in the queue using the methods in the queue class
    const getPeople = returnAll(People);
    return getPeople;
  },

  // is a function to show the next person in line necessary?
  inQueue () {
    return People.showNext();
},

  enqueuePeople (name) {
    // add a person to the store data and the queue
    store.people.push(name);

    // Add a person to the queue.
    People.enqueue(name);
    return returnAll(People);
  },

  dequeue() {
    // Remove a person from the queue.
  }
}

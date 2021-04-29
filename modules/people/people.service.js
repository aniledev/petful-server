const Queue = require("../../modules/queue/Queue.js");
const store = require("../../src/store");

// create a new people queue using the data structure created
let People = new Queue.Queue();
store.people.forEach((person) => People.enqueue(person));

module.exports = {
  getPeople() {
    // Return all people in the queue using the methods in the queue class
    const getPeople = Queue.returnAll(People);
    return getPeople;
  },

  inQueue() {
    return People.showNext();
  },

  enqueuePerson(newName) {
    store.people.push(newName);
    People.enqueue(newName);
    return Queue.returnAll(People);
  },

  dequeuePerson() {
    const adopter = People.dequeue();
    People.enqueue(adopter);
    return Queue.returnAll(People);
  },
};

const express = require("express");
const json = require("body-parser").json();

const People = require("../people/people.service");

const peopleRouter = express.Router();

peopleRouter
  .route("/")
  .get((req, res) => {
    // Use the peopleService to return all people from the queue using returnAll
    res.status(200).json(People.getPeople());
  })
  .delete((req, res) => {
    // remove a person from the queue, use the service
    // send back the new queue of people in json data
    res.status(200).json(People.dequeuePerson());
  })
  .post(json, (req, res) => {
    // access the req body
    const { name } = req.body;
    // const newPerson = { name };
    // Add a new person to the queue.
    const newPeopleQueue = People.enqueuePerson(name);
    // send back json data of the new queue
    res.status(201).json(newPeopleQueue);
  });

module.exports = peopleRouter;

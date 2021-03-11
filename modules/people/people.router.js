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
});

module.exports = peopleRouter;

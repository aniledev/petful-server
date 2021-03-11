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
});

module.exports = peopleRouter;

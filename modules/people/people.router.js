const express = require("express");
const json = require("body-parser").json();

const People = require("../people/people.service");

const peopleRouter = express.Router();

peopleRouter.get("/", (req, res) => {
  // Use the peopleSerivice to return all people from the queue using returnAll
});

peopleRouter.post("/", json, (req, res) => {
  // Add a new person to the queue.
});

module.exports = peopleRouter;

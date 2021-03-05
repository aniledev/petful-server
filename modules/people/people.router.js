const express = require("express");
const json = require("body-parser").json();

const People = require("../people/people.service");

const peopleRouter = express.Router();

peopleRouter.get("/", (req, res) => {
  // Return all the people currently in the queue.
});

peopleRouter.post("/", json, (req, res) => {
  // Add a new person to the queue.
});

module.exports = peopleRouter;

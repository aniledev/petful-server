const express = require("express");
const json = require("body-parser").json();
const store = require("../../store");

const Cats = require("./cats.service");
const People = require("../people/people.service");

const catsRouter = express.Router();

catsRouter
  .route("/")
  .get((req, res) => {
    // Use the catsService to return all cats from the queue using returnAll
    // status code of 200, success
    res.status(200).json(Cats.getCats());
  })

module.exports = catsRouter;

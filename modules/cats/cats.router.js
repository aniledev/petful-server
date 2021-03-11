const express = require("express");
const json = require("body-parser").json();

const Cats = require("./cats.service");

const catsRouter = express.Router();

catsRouter
  .route("/")
  .get((req, res) => {
    // Use the catsService to return all cats from the queue using returnAll
    // status code of 200, success
    res.status(200).json(Cats.getCats());
  })
  .delete((req, res) => {
    // Remove a cat from adoption, use the dequeueCats in the cat service
    Cats.dequeueCats();
    // status code of 204, end req res cycle
    res.status(200).send("Cat successfully deleted/adopted!").end();
  });

module.exports = catsRouter;

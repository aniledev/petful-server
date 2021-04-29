const express = require("express");
const Cats = require("./cats.service");
const catsRouter = express.Router();

catsRouter
  .route("/")
  .get((req, res) => {
    // Use the catsService to return all cats from the queue using returnAll
    res.status(200).json(Cats.getCats());
  })
  .delete((req, res) => {
    // Remove a cat from adoption, use the dequeueCats in the cat service
    Cats.dequeueCats();
    res.status(200).send("Cat successfully deleted/adopted!");
  });

module.exports = catsRouter;

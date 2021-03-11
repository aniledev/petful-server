const express = require("express");
const json = require("body-parser").json();

const Dogs = require("./dogs.service");

const dogsRouter = express.Router();

dogsRouter
  .route("/")
  .get((req, res) => {
    // Use the dogsService to return all dogs from the queue using returnAll
    // status code of 200, success
    res.status(200).json(Dogs.getDogs());
  })
  .delete((req, res) => {
    // Remove a dog from adoption, first in first out, you can only delete the first item in the array, delete the first dog
    Dogs.dequeueDogs();
    // status code of 204??, end() ??
    res.status(200).send("Dog successfully deleted/adopted from queue!");
  });

module.exports = dogsRouter;

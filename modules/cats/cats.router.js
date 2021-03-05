const express = require("express");
const json = require("body-parser").json();
const store = require("../../store");

const Cats = require("./cats.service");
const People = require("../people/people.service");

const catsRouter = express.Router();

catsRouter.get("/", (req, res) => {
  // Use the filter method to return all cats currently up for adoption in the cats array in a json format
  // status code of 200, success
  res.status(200).json(store);
});

catsRouter.delete("/", json, (req, res) => {
  // Remove a cat from adoption, first in first out, you can only delete the first item in the array, delete the first cat
  // status code of 204??, end() ??
});

module.exports = catsRouter;
